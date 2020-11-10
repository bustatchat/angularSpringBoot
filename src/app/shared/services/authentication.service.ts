import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BackendService } from './backend.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { IUser } from 'shared/models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static readonly API_URL = 'auth';

  public isLoggedIn: Boolean = false;

  constructor(private backendServise: BackendService,
              private router: Router,
              private userService: UserService) {

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
   }

   async login(username: String, password: String) {

     return new Promise((res, rej) => {
      this.backendServise.post(AuthenticationService.API_URL + '/signin', {username: username, password: password})
      .subscribe((response) => {
        this.isLoggedIn = true;
        this.userService.setUser(response);
        this.userService.setToken(response.accessToken);
        res();
      }, (err) => {
        rej(err);
      });
     });
   }

   unsetAuthData() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.userService.unsetUser();
  }

  reloadUser() {
    if (this.isLoggedIn && this.userService.user) {
      return this.backendServise.get(AuthenticationService.API_URL + '/user/' + this.userService.user.id)
      .subscribe(
        (response) => {
          this.userService.setUser(response);
        }, () => {
          this.logout();
        });
    }
  }

   logout() {
    this.unsetAuthData();
    this.router.navigate(['login']);
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
      ).subscribe(
        (json) => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
}
