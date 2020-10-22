import {IUser} from '../../../../shared/models/IUser';

export class User implements IUser {
  username: string;
  email: string;
  password: string;

  constructor(user: any) {
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
  }

}
