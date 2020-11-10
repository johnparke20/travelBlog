import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {locations} from '../../assets/quarantineTrip/stops'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  blogPins=[];
  locations=locations;
  blogContents=['zero','one'];
  currentPost:number = 0;
  mymap;

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    this.currentPost = +urlParams.get('id');
  }

  addPins(){
    var myIcon = L.icon({
      iconUrl: '../../assets/pin2.png',
  
      iconSize:     [38, 38], // size of the icon
      iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
      popupAnchor:  [0,-25]
    });
    for(var i:any = 0; i<this.locations.length;i+=1){
      var temp = this.locations[i][1];
      var marker = L.marker(temp,{icon:myIcon}).addTo(this.mymap).bindPopup("<a href='/map?id="+i+"' rel='no-refresh'><b>"+this.locations[i][0]+"</b></a><p>"+this.locations[i][2]+"</p>");
      this.blogPins.push(marker);
    }
  }

  changePost(){
    var body = document.querySelector('.blogContent');
    body.innerHTML = "<b>"+<string>this.locations[this.currentPost][0]+"</b><p>"+this.locations[this.currentPost][2]+"</p>";
  }

  onMapClick(e) {
    var popup = L.popup()
    popup
        .setLatLng(e.latlng)
        .setContent("Would you like to add a blog post at this location?")
        .openOn(this);
  }

  ngOnInit(): void {
    this.mymap = L.map('mapid').setView([41.035820, -97.403819], 4);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'parkejo1/ckhc1uff802jy19o5h8kt8xbu',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicGFya2VqbzEiLCJhIjoiY2toYW1xd2tjMDM0bDJ5bzBuYmtvemphNiJ9.gv751jF0D8YE0L1I7g3Y7g'
    }).addTo(this.mymap);
    this.addPins();
    this.changePost();
    this.mymap.on('click', this.onMapClick);
  }

}
