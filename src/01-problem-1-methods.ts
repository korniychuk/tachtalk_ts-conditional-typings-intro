type AnyObject = { [key: string]: any };

export class User {
  public id: number;
  public email: string;
  public firstName?: string;
  public lastName?: string;

  public constructor(data: AnyObject) {
    this.id        = data.id;
    this.email     = data.email;
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
