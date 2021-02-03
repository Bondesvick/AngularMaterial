import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsComponent} from "./items/items.component";
import {BookitemComponent} from "./bookitem/bookitem.component"
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'bookitems', component: BookitemComponent},
  {path: 'users', component: UsersComponent},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
