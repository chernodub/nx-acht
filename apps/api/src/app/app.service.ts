import { DocumentReference, Firestore, QueryDocumentSnapshot, DocumentData, DocumentSnapshot } from "@google-cloud/firestore";
import { Injectable } from '@nestjs/common';
import { forkJoin, from, Observable, of, combineLatest } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { FirestoreEntity, MappedData } from '@acht/api-firestore-interfaces';
import { Letter } from "@acht/api-interfaces";

/**
 * Map firestore document reference to an observable with data.
 * @param docRef Document reference.
 */
function mapFirestoreDoc<T>(docRef: DocumentReference<T>): Observable<MappedData<T>> {
  return from(docRef.get()).pipe(
    switchMap(snapshot => {
      // Data without an id, because it is not specified explicitly in Firebase
      const data = snapshot.data() as T;

      // Obtain the keys of nested references
      const dataToLoadKeys = Object.keys(data)
        .filter(key => data[key] instanceof DocumentReference);

      // Dict of nested references to load
      const sourcesObject = dataToLoadKeys.reduce((acc, key) => ({
        ...acc,
        [key]: mapFirestoreDoc(data[key]),
      }), {} as Record<keyof T, Observable<T>>);

      // Using `of({})` to finish recursion, because `forkJoin({})` will never emit
      const lazyData$: Observable<Partial<MappedData<T>>> = dataToLoadKeys.length > 0 ? forkJoin(sourcesObject) : of({});

      return lazyData$.pipe(
        map(lazyData => ({
          ...data, // Primitive data
          ...lazyData, // Resolved nested references
          id: snapshot.id, // Firebase id
        } as MappedData<T>)),
      );
    })
  );
}


/** App service. */
@Injectable()
export class AppService {
  /** Firestore reference.  */
  public readonly firestore = new Firestore({
    projectId: 'stoic-c9f05',
  });

  /** Get data. */
  public getData(): Observable<Letter[]> {
    return of(null).pipe(
      switchMap(() => this.firestore.collection('/letters').listDocuments()),
      switchMap(refs => 
        forkJoin(
          refs.map(ref => 
            mapFirestoreDoc<FirestoreEntity.Letter>(ref as DocumentReference<FirestoreEntity.Letter>)))),
    );
  }
}
