/**
 * MemoryDriver.ts 缓存驱动
 * @description 维护一个公共的变量
 */

export default class MemoryDriver implements globalThis.Storage {
  static instance: MemoryDriver | undefined;
  static create() {
    if (!this.instance) {
      this.instance = new MemoryDriver();
    }
    return this.instance;
  }
  [name: string]: any;
  data: Record<string, string> = {};
  length: number = 0;
  clear(): void {
    this.data = {};
  }
  getItem(key: string): string | null {
    return this.data[key];
  }
  key(index: number): string | null {
    throw new Error('Method not implemented.');
  }
  removeItem(key: string): void {
    delete this.data[key];
    this.length--;
  }
  setItem(key: string, value: string): void {
    this.length++;
    this.data[key] = value;
  }
}
