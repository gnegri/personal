import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { NavbarItemList } from '../../classes/NavbarItemList';
import { globals } from '../../data/Globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() type: NavbarItemList;
  currentPage: string;
  location: Location;
  isHidden = true;
  globals = globals;
  isMobile;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.isMobile = globals.isMobile();
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  setActive(page: string): void {
    this.currentPage = page;
  }

  routeIsHome(route: string): boolean {
    return (route === '' || route === '#');
  }

  isActive(page: string): boolean {
    if (this.currentPage === page)  {
      return true;
    } else if (this.location.path() === page) {
     return true;
    } else {
      return false;
    }
  }

  dropdownOrNavItem() {
    if (this.isMobile) {
      return 'dropdown';
    } else {
      return 'nav-link';
    }
  }

  dropdownItemOrNavLink() {
    if (this.isMobile) {
      return 'dropdown-item';
    } else {
      return 'w-50';
    }
  }
}
