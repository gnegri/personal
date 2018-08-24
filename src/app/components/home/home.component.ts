import { Component, OnInit } from '@angular/core';

import { blogPostList } from '../../data/blog/BlogPosts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPostList = blogPostList;

  constructor() { }

  ngOnInit() {
  }

}
