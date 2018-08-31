import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { NavbarItemList } from '../../classes/NavbarItemList';
import { GlobalsService } from '../../services/globals/globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() type: NavbarItemList;
    currentPage: string;
    isHidden = true;

    constructor(
        private location: Location,
        public globalsService: GlobalsService) {
    }

    ngOnInit() {
    }

    toggleHidden(): void {
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
        } else if (this.location.path().includes(page)) {
            return true;
        } else {
            return false;
        }
    }

    dropdownOrNavItem(): string {
        if (this.globalsService.isMobile()) {
            return 'dropdown';
        } else {
            return 'nav-link';
        }
    }

    dropdownItemOrNavLink(): string {
        if (this.globalsService.isMobile()) {
            return 'dropdown-item';
        } else {
            return 'w-50';
        }
    }

}
