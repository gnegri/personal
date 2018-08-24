import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NavbarItem } from '../../classes/NavbarItem';
import { headerList } from '../../data/navbar/HeaderList';
import { carouselImages } from '../../data/carousel/Images';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselImages = carouselImages;
  headerList: Array<NavbarItem> = headerList;


  location: Location;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  shouldShowCarousel(): boolean {
    return (this.location.path() === '');
  }

}
