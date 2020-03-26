export class User {
  public id: number;
  public email: string;
  public firstName?: string;
  public lastName?: string;

  public constructor(data: Partial<User>) {
    this.id        = data.id || NaN;
    this.email     = data.email || '';
    this.firstName = data.firstName;
    this.lastName  = data.lastName;
  }

  public getFullName(): string {
    return `${ this.firstName } ${ this.lastName }`;
  }

}

const u1 = new User({
  id: 123,
  email: 'trump@gmail.com',
});
