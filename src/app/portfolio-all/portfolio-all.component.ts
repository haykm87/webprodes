import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {GETPortfolioAction} from "../shared/Store/Acttions/actionsGetPortfolio";
import {filter, Observable} from "rxjs";
import {Portfolio} from "../shared/interface/portfolio.interface";
import {GetPortfolioEightSelector} from "../shared/Store/selectorHome";
import {GetPortfolioAllSelector} from "../shared/Store/selectorPortfolioAll";

@Component({
  selector: 'app-portfolio-all',
  templateUrl: './portfolio-all.component.html',
  styleUrls: ['./portfolio-all.component.css']
})
export class PortfolioAllComponent implements OnInit {
  AllOurWork: Portfolio[] = [];
  OurWorkByCategory:Portfolio[] =[];
  categoryPortfolio ={
    Web: false,
    All: true,
    Design: false,
    Apps: false,
    Brand: false,
  };
  type: string;
  Portfolio$: Observable<Portfolio[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.type = 'All'
    this.store.dispatch(GETPortfolioAction());
    this.Portfolio$ =this.store.pipe(select(GetPortfolioAllSelector), filter(Boolean))
  }

  ChooseACategory(category: string)
  {
    this.type = category;
    for (let categoryElement in this.categoryPortfolio) {
      if(categoryElement == category)
      {
        this.categoryPortfolio[categoryElement] = true;
      }
      else
      {
        this.categoryPortfolio[categoryElement] = false;
      }

    }
  }

}
