import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  heroes;

  constructor() {this.heroes = ['../../assets/background1.jpg','../../assets/background2.jpg','../../assets/background3.jpg']; }

  ngOnInit(): void {
  }

}
