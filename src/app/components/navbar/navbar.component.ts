import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { NavbarItemList } from '../../classes/NavbarItemList';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() type: NavbarItemList;
  currentPage: string;
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  setActive(page: string) {
    this.currentPage = page;
    return;
  }

  routeIsHome(route: string) {
    return (route === '' || route === '#');
  }

  isActive(page: string) {
    if (this.currentPage === page)  {
      return true;
    } else if (this.location.path() === page) {
     return true;
    } else {
      return false;
    }
  }
}
