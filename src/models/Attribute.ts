export class Attribute<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    // @ts-ignore 1
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
