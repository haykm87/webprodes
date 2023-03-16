import { Component, OnInit } from '@angular/core';
import {filter, Observable} from "rxjs";

import {select, Store} from "@ngrx/store";

import { GetAboutSelector} from "../shared/Store/selectorHome";

import {GETAboutAction} from "../shared/Store/Acttions/actionsGetAbout";
import {AboutUsInterface} from "../shared/interface/about.interface";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  About$: Observable<AboutUsInterface>

  constructor(private  store : Store ) { }

  ngOnInit(): void {
    this.store.dispatch(GETAboutAction())
    this.About$ = this.store.pipe(select(GetAboutSelector), filter(Boolean))


  }



}
