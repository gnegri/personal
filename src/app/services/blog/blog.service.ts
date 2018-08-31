import { Injectable } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';

import { blogPostList } from '../../data/blog/BlogPosts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    blogPostList: Array<BlogPost> = blogPostList;

    constructor() { }

    getBlogPostList(): Array<BlogPost> {
        return this.blogPostList;
    }

    makePostURL(title: string): string {
        return title.replace(/-/g, '_').replace(/[\s]/g, '-');
    }

    decodePostURL(url: string): string {
        return url.replace(/-/g, ' ').replace(/_/g, '-');
    }

}
