import { Component, OnInit } from '@angular/core';

import { globals } from '../../data/Globals';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public generateIsCollapsed = true;
  public publishIsCollapsed = true;

  globals = globals;
  isMobile;

  constructor() { }

  ngOnInit() {
    this.isMobile = globals.isMobile();
  }

}
