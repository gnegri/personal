import { Component, OnInit } from '@angular/core';

import { GlobalsService } from '../../services/globals/globals.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor(
        public globalsService: GlobalsService) { }

    ngOnInit() {
    }

    blogColWidth(): string {
        if (this.globalsService.isMobile()) {
            return 'col-12';
        } else {
            return 'col-9';
        }
    }

    sidebarColWidth(): string {
        if (this.globalsService.isMobile()) {
            return 'col-12';
        } else {
            return 'col-3';
        }
    }

}
