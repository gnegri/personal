import { Component, OnInit} from '@angular/core';

import { exercises } from '../../data/leetcode/LeetcodeExercises';
import { LeetcodeProblem } from '../../classes/LeetcodeProblem';
import { GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent implements OnInit {
  exercises: Array<LeetcodeProblem> = exercises;
  activeTitle: string;

  constructor(public globalsService: GlobalsService) { }

  ngOnInit() {
  }

  setActive(title: string): void {
    this.activeTitle = title;
  }

  isActive(title: string): boolean {
    return this.activeTitle === title;
  }

  datasrc(exerciseNumber: number): string {
    return '/assets/leetcode/exercise' + exerciseNumber + '.js';
  }

  makeTitle(exercise: LeetcodeProblem): string {
    return 'Exercise ' + exercise.exercise + ': ' + exercise.title;
  }

  runtimeTooltip(percentile: number): string {
    return 'This solution is faster than ' + percentile + '% of other submissions in this language.';
  }

  progressBarColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-11 ml-3';
    } else {
      return 'col-sm-8 ml-3';
    }
  }

  problemInfoColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12 text-center';
    } else {
      return 'col-sm-3 text-right';
    }
  }

  colorType(percentile: number): string {
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
