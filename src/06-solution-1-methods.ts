type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type Inter<T> = {} & T;

export class User {
  public id: number;
  public email: string;
  public firstName?: string;
  public lastName?: string;

  public constructor(data: NonFunctionProperties<User>) {
    this.id        = data.id;
    this.email     = data.email;
    this.firstName = data.firstName;
    this.lastName  = data.lastName;
  }

  public getFullName(): string {
    return `${ this.firstName } ${ this.lastName }`;
  }

  public getHasName(): boolean {
    return !!(this.firstName || this.lastName);
  }

}

const u1 = new User({
  id: 123,
  email: 'trump@gmail.com',
});
