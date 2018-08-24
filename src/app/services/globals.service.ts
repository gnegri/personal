import { Injectable } from '@angular/core';

import { globals } from '../data/Globals';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  constructor() { }
  globals;
  _isMobile: boolean = globals.isMobile();

  onResize() {
    this._isMobile = globals.isMobile();
  }

  isMobile() {
    return this._isMobile;
  }

  totalCols() {
    return globals.totalCols;
  }

}
