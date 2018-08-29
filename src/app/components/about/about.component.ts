import { Component, OnInit } from '@angular/core';

import { GlobalsService } from '../../services/globals/globals.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  generateIsCollapsed = true;
  publishIsCollapsed = true;

  _generateDataSrc = '/assets/bash-scripts/generateproject.bash';
  _publishDataSrc = '/assets/bash-scripts/publishproject.bash';
  _primaryColWidth = 5;

  constructor(public globalsService: GlobalsService) {
  }

  ngOnInit() {
  }

  toggleGenerate(): void {
    this.generateIsCollapsed = !this.generateIsCollapsed;
  }

  togglePublish(): void {
    this.publishIsCollapsed = !this.publishIsCollapsed;
  }

  primaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + this._primaryColWidth;
    }
  }

  scondaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + (this.globalsService.totalCols() - this._primaryColWidth);
    }
  }

}
