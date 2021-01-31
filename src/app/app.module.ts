import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './items/items.component';
import {BookitemComponent} from './bookitem/bookitem.component'
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BookService } from './shared/services/book.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './items/course-details/course-details.component';
import { CourseListComponent } from './items/course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    BookitemComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    CourseDetailsComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
