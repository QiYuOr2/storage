export default function isPromise(obj: any): obj is PromiseLike<any> {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}
