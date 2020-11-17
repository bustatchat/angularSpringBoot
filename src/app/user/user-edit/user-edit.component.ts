import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
