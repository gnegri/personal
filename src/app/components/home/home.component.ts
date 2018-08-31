import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog/blog.service';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    mostRecentPost: BlogPost;

    constructor(
        private blogService: BlogService) {
            this.mostRecentPost = this.blogService.getBlogPostList()[0];
    }

    ngOnInit() {
    }
}
