import { Component, OnInit } from '@angular/core';
import {GETServicesAction} from "../shared/Store/Acttions/actionsGetServices";
import {select, Store} from "@ngrx/store";
import {GetServicesSelector, GetTeamSelector} from "../shared/Store/selectorHome";
import {filter, Observable} from "rxjs";
import {OurTeamInterface} from "../shared/interface/our-team";
import {GETTeamAction} from "../shared/Store/Acttions/actionsGetTeam";

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
 Team$: Observable<OurTeamInterface[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(GETTeamAction());
    this.Team$ = this.store.pipe(select(GetTeamSelector),filter(Boolean))
  }

}
