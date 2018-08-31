import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-singleblogpost',
  templateUrl: './singleblogpost.component.html',
  styleUrls: ['./singleblogpost.component.scss']
})
export class SingleblogpostComponent implements OnInit {

    title = '';
    post: BlogPost;
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService) {
            // turn the url back into the title
            this.route.params.subscribe(params =>
                this.title = this.blogService.decodePostURL(params.title)
            );

            // get the proper blog post by title
            this.post = this.blogService.getBlogPostList().find(post =>
                post.title === this.title
            );
    }

    ngOnInit() {
    }

}
