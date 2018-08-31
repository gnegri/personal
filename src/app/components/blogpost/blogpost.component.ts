import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

import { HighlightService } from '../../services/hilghlight/highlight.service';
import { BlogService } from '../../services/blog/blog.service';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, AfterViewInit {

    @Input() post: BlogPost;
    @Input() noLink: boolean;

    constructor(
        private location: Location,
        private highlightService: HighlightService,
        private blogService: BlogService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.highlightService.highlightAll();
    }

    makeURL(title: string): string {
        let prefix = '';
        if (this.location.path() !== '/blog') {
            prefix = 'blog/';
        }
        // replace spaces with dashes
        return prefix + this.blogService.makePostURL(title);
    }

}
