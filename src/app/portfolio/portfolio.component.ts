import { Component, OnInit } from '@angular/core';
import {Portfolio} from 'src/app/shared/interface/portfolio.interface';
import {filter, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {GETPortfolioAction} from "../shared/Store/Acttions/actionsGetPortfolio";
import {GetPortfolioEightSelector} from "../shared/Store/selectorHome";
import {GETPortfolioEightAction} from "../shared/Store/Acttions/actionsGetPortfolioEight";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

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
  constructor(private store: Store ) {

  }

  ngOnInit(): void {
    this.type = 'All'
    this.store.dispatch(GETPortfolioEightAction());
    this.Portfolio$ =this.store.pipe(select(GetPortfolioEightSelector), filter(Boolean))

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
