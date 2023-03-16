import {Component, OnInit, Renderer2} from '@angular/core';
import {ScreenService} from "../screen.service";
import {Observable} from "rxjs";
import {CurrentUserSelector, IsAnonymousSelector, IsLoginSelector, selectFeature} from "../../auth/store/selectors";
import {CorrentUserInerface} from "../CurrentUser";
import {select, Store} from "@ngrx/store";


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {
 isLogined$ : Observable<boolean>
  IsAnonymous$:Observable<boolean>
  CurrentUser$: Observable<CorrentUserInerface>
  constructor(public screen: ScreenService, private store: Store, private renderer: Renderer2) { }

  ngOnInit(): void {
   this.isLogined$ = this.store.pipe(select(IsLoginSelector));
   this.IsAnonymous$ =this.store.pipe(select(IsAnonymousSelector));
   this.CurrentUser$ = this.store.pipe(select(CurrentUserSelector));
  }
  ClickMenu(open: boolean): void
  {
    //this.renderer.addClass(document.body, 'offcanvas-menu')
    if(open)
    {
      this.renderer.addClass(document.body, 'offcanvas-menu')
    }
    else
    {
      this.renderer.removeClass(document.body, 'offcanvas-menu');
    }
  }

}
