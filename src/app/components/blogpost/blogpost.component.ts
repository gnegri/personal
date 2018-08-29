import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';
import { HighlightService } from '../../services/hilghlight/highlight.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, AfterViewInit {

  @Input() post: BlogPost;
  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.highlightService.highlightAll();
  }

}
