import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() imageArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Activate the carousel
    console.log(this.imageArray)
  }


}
