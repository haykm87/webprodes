import { Pipe, PipeTransform } from '@angular/core';
import {Portfolio} from "../../shared/interface/portfolio.interface";

@Pipe({
  name: 'searchPortfolioPipe'
})
export class SearchPortfolioPipePipe implements PipeTransform {

  transform(portfolio: Portfolio[] , search:string =""): Portfolio[] {
    if(search=='' || !portfolio)
    {
      return portfolio;
    }
    else
    {
      return portfolio.filter(portf => {
      return  portf.Name.toLowerCase().includes(search.toLowerCase()) ||
        portf.description.toLowerCase().includes(search.toLowerCase())
      })
    }

  }

}
