import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    UserDetailsComponent,
    UserProfileComponent
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserModule { }
