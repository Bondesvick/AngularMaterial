import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsComponent} from "./items/items.component";
import {BookitemComponent} from "./bookitem/bookitem.component"
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'bookitems', component: BookitemComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: './home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
