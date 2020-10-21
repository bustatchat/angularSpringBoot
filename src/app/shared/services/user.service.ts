import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BackendService } from './backend.service';
import { IUser } from '../../../../shared/models/IUser';
import { User } from '../models/User';

@Injectable()
export class UserService extends DataService {
  public user: User = null;

  constructor(public backendService: BackendService) {
    super('users', backendService);

    const storedUser: IUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            this.user = new User(storedUser);
        }
  }

  setUser(user: IUser) {
    this.user = new User(user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
