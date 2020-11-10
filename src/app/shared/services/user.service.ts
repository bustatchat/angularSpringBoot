import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BackendService } from './backend.service';
import { IUser } from '../../../../shared/models/IUser';
import { User } from '../models/User';
import { Observable } from 'rxjs';

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
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  public setToken(token: string) {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  unsetUser() {
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
  }

  isAdmin(): boolean {
    if (this.user) {
      this.user.roles.forEach((val) => {
        if (val === 'ROLE_ADMIN') {
          return true;
        }
      });
    }

    return false;
  }
}
