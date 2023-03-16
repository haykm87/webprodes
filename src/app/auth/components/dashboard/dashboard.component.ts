import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {GetAuthPortfolioAction} from "../../store/Actions/actionsGetPortfolio";
import {filter, Observable} from "rxjs";
import {Portfolio} from "../../../shared/interface/portfolio.interface";
import {AllAuthPortfolioSelector, isLoadingPortfolioSelector} from "../../store/selectors";
import {DeleteAuthPortfolioAction} from "../../store/Actions/actionsDeletePortfolio";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchStr: string;
  width: String;
  $Portfolio: Observable<Portfolio[]>
  $isLoading: Observable<boolean>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.width = "100px";
    this.store.dispatch(GetAuthPortfolioAction());
    this.$Portfolio = this.store.pipe(select(AllAuthPortfolioSelector),filter(Boolean));
    this.$isLoading = this.store.pipe(select(isLoadingPortfolioSelector))
  }
  remove(id: string)
   {
  this.store.dispatch(DeleteAuthPortfolioAction({id}))
   }
}
