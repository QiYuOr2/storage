import isPromise from './utils/isPromise';

export interface AsyncStorage {
  readonly length: number;
  clear(): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  setItem(key: string, value: string): Promise<void>;
  [name: string]: any;
}

export default class Storage<T extends globalThis.Storage | AsyncStorage> {
  storage: T;
  constructor(storage: T) {
    this.storage = storage;
  }

  public get(key: string | number): unknown | Promise<unknown> {
    if (isPromise(this.storage.getItem)) {
      return new Promise((resolve) => {
        (this.storage.getItem(String(key)) as Promise<string | null>).then(
          (result) => {
            try {
              result = JSON.parse(result ?? '');
            } catch {}
            resolve(resolve);
          }
        );
      });
    } else {
      let data = this.storage.getItem(String(key));

      try {
        data = JSON.parse((data as string | null) ?? '');
      } catch {}

      return data;
    }
  }

  public set<U>(key: string | number, value: U) {
    let data;
    if (typeof value === 'object') {
      data = JSON.stringify(value);
    } else {
      data = String(value);
    }
    this.storage.setItem(String(key), data);
  }

  public remove(key: string | number) {
    this.storage.removeItem(String(key));
  }

  public clear() {
    this.storage.clear();
  }
}
