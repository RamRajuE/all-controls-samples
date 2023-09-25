import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  carouselItems = [
    {
      src: 'https://ej2.syncfusion.com/angular/demos/assets/carousel/images/bridge.jpg',
      caption: 'Golden Gate Bridge, San Francisco',
      altText: "bridge"
    },
    {
      src: 'https://ej2.syncfusion.com/angular/demos/assets/carousel/images/trees.jpg',
      caption: 'Spring Flower Trees',
      altText: "spring_trees"
    },
    {
      src: 'https://ej2.syncfusion.com/angular/demos/assets/carousel/images/waterfall.jpg',
      caption: 'Oddadalen Waterfalls, Norway',
      altText: "waterfall"
    },
    {
      src: 'https://ej2.syncfusion.com/angular/demos/assets/carousel/images/sea.jpg',
      caption: 'Anse Source d\'Argent, Seychelles',
      altText: "sea"
    },
    {
      src: 'https://ej2.syncfusion.com/angular/demos/assets/carousel/images/rocks.jpeg',
      caption: 'Stonehenge, England',
      altText: "rocks"
    }
  ];

}
