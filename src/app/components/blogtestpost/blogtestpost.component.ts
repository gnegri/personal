import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';
import { testPost } from '../../data/blog/testPost';

@Component({
  selector: 'app-blogtestpost',
  templateUrl: './blogtestpost.component.html',
  styleUrls: ['./blogtestpost.component.scss']
})
export class BlogtestpostComponent implements OnInit {

  testPost: BlogPost = testPost;
  title: string = testPost.title;
  date: string = testPost.date;
  body: string = testPost.body;

  constructor() { }

  ngOnInit() {
  }

}
