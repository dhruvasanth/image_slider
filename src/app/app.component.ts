import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // imageObject : Array<object> = [
  //   {
  //     image:'assets/pictures/IMG_20181002_070505.jpg',thumbImgae:'assets/pictures/IMG_20181002_070505.jpg' ,alt: 'assets/pictures/IMG_20181002_070505.jpg',title:'title of image'
  //   },
  //   {
  //     image:'assets/pictures/IMG_20181002_072840.jpg',thumbImgae:'assets/pictures/IMG_20181002_072840.jpg' ,alt: 'assets/pictures/IMG_20181002_072840.jpg',title:'title of image'
  //   },
  //   {
  //   image:'assets/pictures/IMG_20181002_072846.jpg',thumbImgae:'assets/pictures/IMG_20181002_072846.jpg' ,alt: 'assets/pictures/IMG_20181002_072846.jpg',title:'title of image'
  //   },
  //   {
  //     image:'assets/pictures/IMG_20181002_073204.jpg',thumbImgae:'assets/pictures/IMG_20181002_073204.jpg' ,alt: 'assets/pictures/IMG_20181002_073204.jpg',title:'title of image'
  //   }
  // ];



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dotsEach: true,
    navSpeed: 3000,
    navText: ['prev', 'next'],
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:3000,
    margin:10,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  slidesStore:Array<object>=[

    { id:1,src:'assets/pictures/IMG_20181002_070505.jpg',alt:'alternative image',title:'title of image'},
    //{ id:2,src:'assets/pictures/IMG_20181002_084736.jpg',alt:'alternative image',title:'title of image'},
    { id:3,src:'assets/pictures/IMG_20181002_084749.jpg',alt:'alternative image',title:'title of image'},
    { id:4,src:'assets/pictures/IMG_20181002_091901.jpg',alt:'alternative image',title:'title of image'},
    { id:5,src:'assets/pictures/IMG_20181002_091926.jpg',alt:'alternative image',title:'title of image'}
  ];

  ngOnInit(): void {
    
  }

}



