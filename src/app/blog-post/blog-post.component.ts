import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  heroes;

  constructor() {this.heroes = [0,1,2,3,4,5]; }

  ngOnInit(): void {
  }

}
