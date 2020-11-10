import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}