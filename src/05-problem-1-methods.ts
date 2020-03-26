type Inter<T> = {} & T;

export class User {
  public id: number;
  public email: string;
  public firstName?: string;
  public lastName?: string;

  public constructor(data: Omit<Inter<User>, 'getFullName' | 'getHasName'>) {
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
