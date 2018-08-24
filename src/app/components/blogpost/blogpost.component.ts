import { Component, OnInit, Input } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {

  @Input() post: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
