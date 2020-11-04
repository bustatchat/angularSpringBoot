import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BackendService } from './backend.service';
import { UserService } from './user.service';
import { IUser } from 'shared/models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static readonly API_URL = 'auth';

  public isLoggedIn: Boolean = false;

  constructor(private backendServise: BackendService, private userService: UserService) {

   }

   async login(username: String, password: String) {

     return new Promise((res, rej) => {
      this.backendServise.post(AuthenticationService.API_URL + '/signin', {username: username, password: password})
      .subscribe((response) => {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.userService.setUser(response);
        console.log(localStorage);
        res();
      }, (err) => {
        rej(err);
      });
     });
   }

   register(user) {
    const role: string[] = [];

    for (const [key, val] of Object.entries(user.role)) {
      if (val) {
        role.push(key);
      }
    }

    user.role = role;

    return new Promise((resolve, reject) => {
      return this.backendServise.post(
        AuthenticationService.API_URL + '/signup',
        user
      )
      .subscribe(
        (json) => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });

  }

}
