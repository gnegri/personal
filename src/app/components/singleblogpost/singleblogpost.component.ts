import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { unSanitizePostTitle } from '../blog/blog.component';

import { BlogPost } from '../../classes/BlogPost';
import { blogPostList } from '../../data/blog/BlogPosts';

@Component({
  selector: 'app-singleblogpost',
  templateUrl: './singleblogpost.component.html',
  styleUrls: ['./singleblogpost.component.scss']
})
export class SingleblogpostComponent implements OnInit {

  title = '';
  post: BlogPost;
  constructor(private route: ActivatedRoute) {
    // turn the url back into the title
    this.route.params.subscribe( params => this.title = unSanitizePostTitle(params.title) );

    // get the proper blog post by title
    this.post = blogPostList.find( post => post.title === this.title );
  }

  ngOnInit() {
  }

}
