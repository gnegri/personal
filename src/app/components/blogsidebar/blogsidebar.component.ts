import { Component, OnInit } from '@angular/core';

import { GlobalsService } from '../../services/globals/globals.service';
import { BlogService } from '../../services/blog/blog.service';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.scss']
})
export class BlogsidebarComponent implements OnInit {

    blogPostList: Array<BlogPost>;
    constructor(
        public blogService: BlogService,
        public globalsService: GlobalsService) {
            this.blogPostList = this.blogService.getBlogPostList();
    }

    ngOnInit() {
    }

}
