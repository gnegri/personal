import { Component, OnInit } from '@angular/core';

import { GlobalsService } from '../../services/globals/globals.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  isCollapsed = true;

  _headerbodyPrimaryColWidth = 8;
  _edulangPrimaryColWidth = 7;

  constructor(public globalsService: GlobalsService) { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
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
