import { Component, OnInit } from '@angular/core';

import { footer } from '../../data/Footer';
import { NavbarItemList } from '../../classes/NavbarItemList';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  type: NavbarItemList;

  constructor() { }

  ngOnInit() {
    this.type = footer;
  }

}
