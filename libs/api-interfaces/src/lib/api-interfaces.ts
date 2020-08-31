import {FirestoreEntity, MappedData} from '@acht/api-firestore-interfaces';

/** Letter. */
export type Letter = MappedData<FirestoreEntity.Letter>;

/** Quote. */
export type Quote = MappedData<FirestoreEntity.Quote>;

/** Artwork. */
export type Work = MappedData<FirestoreEntity.Work>;

/** Author. */
export type Author = MappedData<FirestoreEntity.Author>;
