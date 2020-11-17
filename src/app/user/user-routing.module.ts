import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: UserDetailsComponent,
    },
    {
        path: ':id',
        component: UserDetailsComponent,
    },
    {
        path: 'userEdit/:id',
        component: UserEditComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
