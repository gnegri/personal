import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-code-from-file',
  templateUrl: './code-from-file.component.html',
  styleUrls: ['./code-from-file.component.scss']
})
export class CodeFromFileComponent implements OnInit, AfterViewInit  {
  @Input() datasrc;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.highlightService.retrigger();
  }
}
