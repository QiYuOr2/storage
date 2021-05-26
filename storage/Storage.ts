export default class Storage<T extends globalThis.Storage> {
  storage: T;
  constructor(storage: T) {
    this.storage = storage;
  }

  public get(key: string | number) {
    let data = this.storage.getItem(String(key));

    try {
      data = JSON.parse(data ?? '');
    } catch (error) {}

    return data;
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
