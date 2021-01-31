import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showNav = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.showNav);
  }

  toggeleNav(){
    this.showNav = !this.showNav;
    console.log(this.showNav);
  }

}
