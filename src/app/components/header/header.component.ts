import { Component, OnInit } from '@angular/core';

import { header } from '../../data/Header';
import { NavbarItemList } from '../../classes/NavbarItemList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  type: NavbarItemList;
  constructor() { }

  ngOnInit() {
    this.type = header;
  }

}
