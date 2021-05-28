import Storage from './Storage';
import CookieDriver from './driver/CookieDriver';
import MemoryDriver from './driver/MemoryDriver';
import IndexedDBDriver from './driver/IndexedDBDriver';

export const local = new Storage(localStorage);
export const session = new Storage(sessionStorage);
export const cookie = new Storage(new CookieDriver());
export const memory = new Storage(MemoryDriver.create());
export const indexed = new Storage(new IndexedDBDriver());
