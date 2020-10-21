import {IUser} from '../../../../shared/models/IUser';

export class User implements IUser {
  user_id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  created_date: Date;
  created_ip: string;

    constructor(user: any) {
        this.user_id = user.user_id;
        this.email = user.email;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.password = user.password;
        this.is_admin = user.is_admin;
        this.is_admin = user.is_admin;
        this.created_date = user.created_date;
        this.created_ip = user.created_ip;
    }

}
