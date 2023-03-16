import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetCurrentUserActions} from "./auth/store/Get-Current-User.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private  store: Store ) {
  }
  ngOnInit() {
    this.store.dispatch(GetCurrentUserActions())
  }

  title = 'ararat';
}
