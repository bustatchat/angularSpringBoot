import {IUser} from '../../../../shared/models/IUser';

export class User implements IUser {
  id: number;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;

  constructor(user: any) {
    this.id          = user.id;
    this.username    = user.username;
    this.email       = user.email;
    this.roles       = user.roles;
    this.accessToken = user.accessToken;
  }

}
