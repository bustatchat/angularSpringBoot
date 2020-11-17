import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userId: String;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
