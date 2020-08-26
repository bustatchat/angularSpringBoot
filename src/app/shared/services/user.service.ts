import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BackendService } from './backend.service';
import { IUser } from './../models/IUser';

@Injectable()
export class UserService extends DataService {

  constructor(public backendService: BackendService) {
    super('users', backendService);
  }
}
