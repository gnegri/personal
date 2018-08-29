import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';
import { blogPostList } from '../../data/blog/BlogPosts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostRecentPost: BlogPost = blogPostList[0];

  constructor() { }

  ngOnInit() {
  }
}
