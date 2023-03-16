import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {filter, Observable} from "rxjs";
import {OurServicesInterface} from "../shared/interface/our-services";
import {GETServicesAction} from "../shared/Store/Acttions/actionsGetServices";
import {GetServicesSelector} from "../shared/Store/selectorHome";

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {
Service$ : Observable<OurServicesInterface[]>
  constructor(private store: Store ) { }

  ngOnInit(): void {
  this.store.dispatch(GETServicesAction());
  this.Service$ = this.store.pipe(select(GetServicesSelector),filter(Boolean))
  }

}
