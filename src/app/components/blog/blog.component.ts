import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { BlogPost } from '../../classes/BlogPost';

import { blogPostList } from '../../data/blog/BlogPosts';

import { GlobalsService } from '../../services/globals/globals.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPostList: Array<BlogPost> = blogPostList;

  constructor(private location: Location,
    public globalsService: GlobalsService) { }

  ngOnInit() {
  }

  makeURL(title: string): string {
    return sanitizePostTitle(title);
  }


  blogColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-9';
    }
  }

  sidebarColWidth(): string {
    if (this.globalsService.isMobile()) {
      return 'col-12';
    } else {
      return 'col-3';
    }
  }

}

export function sanitizePostTitle(title: string): string {
  return title.replace(/-/g, '_').replace(/[\s]/g, '-');
}

export function unSanitizePostTitle(url: string): string {
  return url.replace(/-/g, ' ').replace(/_/g, '-');
}
