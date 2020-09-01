import { DocumentReference } from "@google-cloud/firestore";

/** Result without the document refs. */
export type MappedData<T> = WithId<{
  readonly [K in keyof T]: 
    T[K] extends DocumentReference<infer D> ? 
    MappedData<D> : T[K];
}>;

/** Wrapper for a firestore reference to have an id. */
export type WithId<D> = D & {
  /** Id. */
  id: string;
};

/** Namespace to store all the firestore entities. */
export namespace FirestoreEntity {
  /** Article reference. */
  export interface Article {
    /** Article HTML content. */
    content: string;
    /** Article name. */
    name: string;
    /** Qutote reference. */
    quote: DocumentReference<Quote>;
  }

  export interface Quote {
    /** Quote text. */
    text: string;
    /** The artwork from quote is from. */
    work: DocumentReference<Work>;
  }

  /** Artwork reference. */
  export interface Work {
    /** The name of work. */
    name: string;
    /** Work's author. */
    author: DocumentReference<Author>;
  }

  /** Author reference. */
  export interface Author {
    /** Name of the author. */
    name: string;
  }
}