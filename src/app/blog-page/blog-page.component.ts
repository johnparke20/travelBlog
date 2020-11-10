import { Component, OnInit } from '@angular/core';
import {locations} from '../../assets/quarantineTrip/stops'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  heroes;
  postGrid=[];

  constructor() {
    for(var i = 0;i<locations.length;i+=3){
      var tempRow = []
      for(var j = 0;j<3;j+=1){
        tempRow.push(locations[i+j]);
      }
      this.postGrid.push(tempRow);
    }
    this.heroes = ['../../assets/background1.jpg','../../assets/background2.jpg','../../assets/background3.jpg']; 
  }

  ngOnInit(): void {
  }

}
