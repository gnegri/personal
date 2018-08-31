import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog/blog.service';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.scss']
})
export class BlogpostsComponent implements OnInit {

    blogPostList: Array<BlogPost>;
    constructor(private blogService: BlogService) {
        this.blogPostList = this.blogService.getBlogPostList();
    }

    ngOnInit() {
    }

}
