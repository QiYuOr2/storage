/**
 * CookieDriver.ts cookie驱动
 * @description 使其支持对cookie的操作
 */

export default class CookieDriver implements globalThis.Storage {
  [name: string]: any;

  length: number = 0;

  clear(): void {
    this.length = 0;
    document.cookie = '';
  }
  getItem(key: string): string | null {
    if (this.length > 0) {
      let start = document.cookie.indexOf(key + '=');
      let end;
      if (start !== -1) {
        start = start + String(key).length + 1;
        end = document.cookie.indexOf(';', start);
        if (end === -1) {
          end = document.cookie.length;
        }
        return decodeURIComponent(document.cookie.substring(start, end));
      }
    }
    return null;
  }
  key(index: number): string | null {
    throw new Error('Method not implemented.');
  }
  removeItem(key: string): void {
    if (this.length > 0) {
      let start = document.cookie.indexOf(key + '=');
      let end;
      if (start !== -1) {
        let valueStart = start + String(key).length + 1;
        end = document.cookie.indexOf(';', valueStart);
        if (end === -1) {
          const subString = document.cookie.substring(start, end);
          document.cookie.replace(subString, '');
          this.length--;
        }
      }
    }
  }
  setItem(key: string, value: string) {
    this.length++;
    document.cookie = `${key}=${encodeURIComponent(
      value
    )};max-age=${31525459200};path=/`;
  }
}
