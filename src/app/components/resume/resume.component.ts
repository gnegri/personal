import { Component, OnInit } from '@angular/core';

import { globals } from '../../data/Globals';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public isCollapsed = true;
  globals = globals;
  isMobile;

  constructor() { }

  ngOnInit() {
    this.isMobile = globals.isMobile();
  }

  sourceCardWidth(): string {
    if (this.isMobile) {
      return 'w-100';
    } else {
      return 'w-50';
    }
  }

  primaryColWidth(): string {
    if (this.isMobile) {
      return 'col-12';
    } else {
      return 'col-7';
    }
  }

  secondaryColWidth(): string {
    if (this.isMobile) {
      return 'col-12';
    } else {
      return 'col-5';
    }
  }

  educationHeaderColWidth(): string {
    if (this.isMobile) {
      return 'col-12';
    } else {
      return 'col-8';
    }
  }

  educationBodyColWidth(): string {
    if (this.isMobile) {
      return 'col-11';
    } else {
      return 'col-11';
    }
  }

  dateTextAlign(): string {
    if (this.isMobile) {
      return 'text-left';
    } else {
      return 'text-center';
    }
  }


}
