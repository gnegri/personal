import { Component, OnInit, AfterViewInit } from '@angular/core';

// import { globals } from './data/Globals';
import { GlobalsService } from './services/globals.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // globals = globals;
  constructor(private globalsService: GlobalsService) {
  }
  // isMobile: boolean = this.globalsService.isMobile();

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit() {
    this.onResize();
  }

  onResize() {
    // this.isMobile = this.globalsService.isMobile();
    this.globalsService.isMobile();
  }
}
