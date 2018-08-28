import { Injectable } from '@angular/core';

// import { globals } from '../data/Globals';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  constructor() {
  }
  _isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
  _totalCols = 12;
  // globals;

  _getWidth(): number {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
  }

  isMobile(): boolean {
    // this._isMobile = this._isMobile;
    return this._isMobile || this._getWidth() <= 1000;
  }

  totalCols(): number {
    // return globals.totalCols;
    return this._totalCols;
  }

}
