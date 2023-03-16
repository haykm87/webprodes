import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IsLoginSelector} from "../../auth/store/selectors";

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  isLogined$ : Observable<boolean>;
  constructor(private  store: Store) {
    this.isLogined$ = this.store.pipe(select(IsLoginSelector));
  }
  set(key: string, date: any)
   {
     try {
       localStorage.setItem(key, JSON.stringify(date))
     }
catch (e)
{
  console.error('error localstoreg', e)
}
   }

   get(key: string) : any
   {
     try {
       return JSON.parse(localStorage.getItem(key))
     }
     catch (e) {
       console.error('error localstoreg', e);
       return null;
     }

   }


}
