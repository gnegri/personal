import { Component, OnInit } from '@angular/core';

import { globals } from '../../data/Globals';
import { GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public isCollapsed = true;

  _headerbodyPrimaryColWidth = 8;
  _edulangPrimaryColWidth = 7;

  constructor(public globalsService: GlobalsService) { }

  ngOnInit() {
  }

  sourceCardWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'w-100';
    } else {
      return 'w-50';
    }
  }

  headerbodyPrimaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + this._headerbodyPrimaryColWidth;
    }
  }

  headerbodySecondaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + (this.globalsService.totalCols() - this._headerbodyPrimaryColWidth);
    }
  }

  edulangPrimaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + this._edulangPrimaryColWidth;
    }
  }

  edulangSecondaryColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-' + (this.globalsService.totalCols() - this._edulangPrimaryColWidth);
    }
  }

  educationHeaderColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-8';
    }
  }

  educationBodyColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-11';
    } else {
      return 'col-11';
    }
  }

  dateTextAlign(): string {
    if (this.globalsService.isMobile()) {
      return 'text-left';
    } else {
      return 'text-center';
    }
  }


}
