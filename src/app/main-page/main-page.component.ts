import { Component, OnInit, ViewChild  } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";

import {lightSpeedIn} from "ng-animate";
import { SwiperComponent } from "swiper/angular";


// import SwiperCore, {  EffectFade, Swiper  } from "swiper";

//SwiperCore.use([Pagination]);
//SwiperCore.use([Virtual]);
//SwiperCore.use([EffectFade]);



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],

})
export class MainPageComponent implements OnInit {
 // lightSpeedIn: any;


  constructor() { }


  ngOnInit(): void {
  }
  onSwiper(swiper:Event) {
   // console.log(swiper);
  }
  onSlideChange() {
    //console.log('slide change');
  }

}
