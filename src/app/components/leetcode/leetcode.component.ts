import { Component, OnInit } from '@angular/core';

import { exercises } from '../../data/extensable/LeetcodeExercises';
import { LeetcodeProblem } from '../../classes/LeetcodeProblem';
import { globals } from '../../data/Globals';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent implements OnInit {

  exercises: Array<LeetcodeProblem> = exercises;
  globals = globals;
  isMobile;

  constructor() { }

  ngOnInit() {
    this.isMobile = globals.isMobile();
  }

  makeTitle(exercise: LeetcodeProblem) {
    return 'Exercise ' + exercise.exercise + ': ' + exercise.title;
  }

  runtimeTooltip(percentile: number) {
    return 'This solution is faster than ' + percentile + '% of other submissions in this language.';
  }

  problemInfoColWidth() {
    if (this.isMobile) {
      return 'col-9';
    } else {
      return 'col-3';
    }
  }

  colorType(percentile: number) {
    if (percentile >= 75) {
      return 'success';
    } else if (percentile >= 50) {
      return 'info';
    } else if (percentile >= 25) {
      return 'warning';
    } else if (percentile >= 0) {
      return 'danger';
    } else {
      return '';
    }
  }

}
