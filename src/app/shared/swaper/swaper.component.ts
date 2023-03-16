import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import {filter, Observable} from "rxjs";
import {SliderInterface} from "../interface/SliderInterface";
import {select, Store} from "@ngrx/store";
import {SliderSelector} from "../Store/selectorHome";
import {GETSliderAction} from "../Store/Acttions/actionsGetSlider";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar,Autoplay, A11y]);
@Component({
  selector: 'app-swaper',
  templateUrl: './swaper.component.html',
  styleUrls: ['./swaper.component.css']
})
export class SwaperComponent implements OnInit {
slider$: Observable<SliderInterface[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
  this.store.dispatch(GETSliderAction())
  this.slider$ = this.store.pipe(select(SliderSelector),filter(Boolean))
  }
  onSwiper(swiper:Event) {
    //console.log(swiper);
  }
  onSlideChange() {
   // console.log('slide change');
  }
}
