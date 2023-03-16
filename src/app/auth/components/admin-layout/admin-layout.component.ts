import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CorrentUserInerface} from "../../../shared/CurrentUser";
import {ScreenService} from "../../../shared/screen.service";
import {select, Store} from "@ngrx/store";
import {CurrentUserSelector, IsAnonymousSelector, IsLoginSelector, testSelector} from "../../store/selectors";
import {LogoutAction} from "../../../shared/Store/Acttions/actions.async";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  isLogined$ : Observable<boolean>
  IsAnonymous$:Observable<boolean>
  CurrentUser$: Observable<CorrentUserInerface>
//  test$ : Observable<any>
  constructor(public screen: ScreenService, private store: Store) { }

  ngOnInit(): void {
    this.isLogined$ = this.store.pipe(select(IsLoginSelector));
    this.IsAnonymous$ =this.store.pipe(select(IsAnonymousSelector));
    this.CurrentUser$ = this.store.pipe(select(CurrentUserSelector));
   //this.test$ = this.store.pipe(select(testSelector));


  }

  Logout()
  {
    this.store.dispatch(LogoutAction())
  }

}
