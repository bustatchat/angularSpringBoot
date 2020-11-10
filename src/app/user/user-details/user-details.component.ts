import { Component, OnInit } from '@angular/core';
import { IUser } from 'shared/models/IUser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  user: IUser;
  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userId = this.userService.user.id;
    this.user = this.userService.user;
    console.log(this.user);
  }

  exportProfile() {

  }

  deleteProfile() {

  }
}
