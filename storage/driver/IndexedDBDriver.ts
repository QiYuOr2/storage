import { AsyncStorage } from '../Storage';

const DB_NAME = 'xmy6364_storage_db';
const TABLE_NAME = 'xmy6364_storage_table';

export default class IndexedDBDriver implements AsyncStorage {
  [name: string]: any;
  length: number = 0;
  request: IDBOpenDBRequest;
  db!: IDBDatabase;

  constructor() {
    if (!indexedDB) {
      console.error('您的浏览器不支持indexedDB');
    }
    this.request = indexedDB.open(DB_NAME);

    this.request.onupgradeneeded = () => {
      console.log('[onupgradeneeded]');

      const db = this.request.result;

      if (!db.objectStoreNames.contains(TABLE_NAME)) {
        db.createObjectStore(TABLE_NAME, {
          keyPath: 'key',
        });
      }

      this.db = db;
    };

    this.request.onsuccess = () => {
      this.db = this.request.result;
      console.log('indexedDB 启动成功');
    };
  }

  clear(): Promise<void> {
    return new Promise((resolve) => {
      const transaction = this.db.transaction([TABLE_NAME], 'readwrite');
      const objStore = transaction.objectStore(TABLE_NAME);
      const request = objStore.clear();
      request.onsuccess = () => {
        this.length = 0;
        resolve();
      };
    });
  }
  getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      const transaction = this.db.transaction([TABLE_NAME], 'readonly');
      const objStore = transaction.objectStore(TABLE_NAME);
      const request = objStore.get(key);
      request.onsuccess = () => {
        resolve(request.result.value);
      };
    });
  }
  removeItem(key: string): Promise<void> {
    return new Promise((resolve) => {
      const transaction = this.db.transaction([TABLE_NAME], 'readwrite');
      const objStore = transaction.objectStore(TABLE_NAME);
      const request = objStore.delete(key);
      request.onsuccess = () => {
        this.length--;
        resolve();
      };
    });
  }
  setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve) => {
      const transaction = this.db.transaction([TABLE_NAME], 'readwrite');
      const objStore = transaction.objectStore(TABLE_NAME);

      const getResult = objStore.get(key);
      getResult.onsuccess = () => {
        if (getResult.result) {
          const putResult = objStore.put({ key, value });
          putResult.onsuccess = () => {
            resolve();
          };
        } else {
          const addRequest = objStore.add({ key, value });
          addRequest.onsuccess = () => {
            this.length++;
            resolve();
          };
        }
      };
    });
  }
}
