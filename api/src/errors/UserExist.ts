export class UserExist extends Error {
  idError: number;
  constructor(msg: string) {
    super(msg);
    this.name = "UserExist";
  }
}
