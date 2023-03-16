import { Pipe, PipeTransform } from '@angular/core';
import {Portfolio} from "../interface/portfolio.interface";

@Pipe({
  name: 'sortingPortfolio'
})
export class SortingPortfolioPipe implements PipeTransform {

  transform(portfolio: Portfolio[], type:string="All"): Portfolio[] {

    if(type=='All' || !portfolio)
    {

      return portfolio;
    }
      else
    {

      return portfolio.filter(person => (person.Category).toString() == type);

    }

  }

}
