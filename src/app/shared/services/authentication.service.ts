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

   async login(email: String, password: String) {

     return new Promise((res, rej) => {
      this.backendServise.post(AuthenticationService.API_URL + '/signin', {email: email, password: password}).subscribe((response) => {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.userService.setUser(response['user']);
        res();
      }, (err) => {
        rej(err);
      });
     });
   }

   register(user: IUser) {

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
