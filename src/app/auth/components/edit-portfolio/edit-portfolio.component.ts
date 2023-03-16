import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, Observable, Subscription, switchMap} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Params, Route} from "@angular/router";
import {Portfolio} from "../../../shared/interface/portfolio.interface";
import {select, Store} from "@ngrx/store";
import {
  AllCategoryPortfolioSelector, AuthPortfolioByIDSelector,
  isLoadingPortfolioSelector,
  isSubmitingPortfolioSelector,
  PortfoliErrorSelector, UpdatePortfolioSelector
} from "../../store/selectors";
import {CategoryInterface} from "../../../shared/interface/Category.interface";
import {GetCategoryAction} from "../../store/Actions/actionsGetCategory";
import {GetAuthPortfolioByIdAction} from "../../store/Actions/actionsGetPortfolioById";
import {UpdateAuthPortfolioAction} from "../../store/Actions/actionsUpdatePortfolio";

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit, OnDestroy {
  formPortfolio: FormGroup;
  isSubmiting$ : Observable<boolean | null>;
  isLoading$ :Observable<boolean | null>;
  Category$: Observable<CategoryInterface[]>;
  SubPortfolio: Subscription;
  searchStr: string;
  Id: string

  Portfolio$:Observable<Portfolio>;
  constructor(private authServicve: AuthService,
              private rout: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(GetCategoryAction());
    this.InitilaizeValue();


  }

InitilaizeValue(): void
  {

    this.isLoading$ = this.store.pipe(select(isLoadingPortfolioSelector));
    this.Category$ = this.store.pipe(select(AllCategoryPortfolioSelector), filter(Boolean))
    this.rout.params.subscribe((param: Params) => {
      const Id = param['id'];
      this.store.dispatch(GetAuthPortfolioByIdAction({Id}));
      this.Portfolio$ = this.store.pipe(select(AuthPortfolioByIDSelector), filter(Boolean));
      this.InitilaizeForm();
      //formGroup
    })

  }

  InitilaizeForm(): void
  {

    this.SubPortfolio =this.Portfolio$.subscribe((portf: Portfolio) =>
      {
        this.Id = portf.id;
        this.formPortfolio = new FormGroup(
          {
            "Name": new FormControl(portf.Name, Validators.required),
            "category": new FormControl(portf.Category, Validators.required),
            "description": new FormControl(portf.description, Validators.required),
            "Photo": new FormControl(portf.Photo, Validators.required),
            "Link": new FormControl(portf.Link, Validators.required)

          }
        );
      }
    )
  }

  OnSubmit()
   {
     if(this.formPortfolio.invalid)
     {
       return
     }

     const request: Portfolio= {
       id: this.Id,
       Name:this.formPortfolio.value.Name,
       description:this.formPortfolio.value.description,
       Category:this.formPortfolio.value.category,
       Photo:this.formPortfolio.value.Photo,
       Link:this.formPortfolio.value.Link


     }

 this.store.dispatch(UpdateAuthPortfolioAction({request}));
     this.Portfolio$    = this.store.pipe(select(UpdatePortfolioSelector), filter(Boolean))
   }

   ngOnDestroy()
   {
     if(this.SubPortfolio)
     {
       this.SubPortfolio.unsubscribe();
     }
   }
}
