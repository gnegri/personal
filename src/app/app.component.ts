import { Component, OnInit } from '@angular/core';

import { globals } from './data/Globals';
import { GlobalsService } from './services/globals.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  globals = globals;
  isMobile: boolean = globals.isMobile();

  constructor(private globalsService: GlobalsService) {
  }

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.globalsService._isMobile = globals.isMobile();
  }
}
