import {FirestoreEntity, MappedData} from '@acht/api-firestore-interfaces';

/** Article. */
export type Article = MappedData<FirestoreEntity.Article>;

/** Quote. */
export type Quote = MappedData<FirestoreEntity.Quote>;

/** Artwork. */
export type Work = MappedData<FirestoreEntity.Work>;

/** Author. */
export type Author = MappedData<FirestoreEntity.Author>;
