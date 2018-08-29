import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';
import { template } from '../../data/blog/posts/template';

@Component({
  selector: 'app-blogtestpost',
  templateUrl: './blogtestpost.component.html',
  styleUrls: ['./blogtestpost.component.scss']
})
export class BlogtestpostComponent implements OnInit {

  template: BlogPost = template;
  title: string = template.title;
  date: string = template.date;
  body: string = template.body;

  constructor() { }

  ngOnInit() {
  }

}
