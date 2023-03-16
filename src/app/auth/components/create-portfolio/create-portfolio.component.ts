import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {AuthService} from "../../service/auth.service";
import {select, Store} from "@ngrx/store";
import {
  AllCategoryPortfolioSelector, isLoadingPortfolioSelector,

  isSubmitingPortfolioSelector,
  PortfoliErrorSelector,

} from "../../store/selectors";


import {CategoryAction} from "../../store/Actions/actionsCategory";
import {CategoryInterface} from "../../../shared/interface/Category.interface";
import {Portfolio} from "../../../shared/interface/portfolio.interface";
import {GetCategoryAction} from "../../store/Actions/actionsGetCategory";
import {AddPortfolioAction} from "../../store/Actions/actionsAddPortfolio";

@Component({
  selector: 'create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {

  form: FormGroup;
  Backenderrors$ : Observable<BackendErrorsInterface | null>;
  isSubmiting$ : Observable<boolean | null>;
  isLoading$ :Observable<boolean | null>;
  Category$: Observable<CategoryInterface[]>

  constructor(private  auth: AuthService, private store: Store,) { }

  ngOnInit(): void {
    this.store.dispatch(GetCategoryAction());
    this.InitilaizeValue();
    this.InitilaizeForm();

  }

  InitilaizeValue(): void
  {
    // this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector));
    //  console.log(this.Backenderrors$)
    this.Backenderrors$ = this.store.pipe(select(PortfoliErrorSelector));
    this.isSubmiting$ = this.store.pipe(select(isSubmitingPortfolioSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingPortfolioSelector));
    this.Category$ = this.store.pipe(select(AllCategoryPortfolioSelector), filter(Boolean))

  }
  InitilaizeForm(): void
  {
    this.form = new FormGroup(
      {
        "Name": new FormControl("", Validators.required),
        "category": new FormControl("", Validators.required),
        "description": new FormControl("", Validators.required),
        "Photo": new FormControl("", Validators.required),
         "Link": new FormControl("")}

    );
  }

  submit()
  {

    if(this.form.invalid)
    {
      return
    }
    const request: Portfolio = {
      Name:this.form.value.Name,
      Category: this.form.value.category,
      description:this.form.value.description,
      Photo:this.form.value.Photo,
      Link: this.form.value.Link,
    }

    this.store.dispatch(AddPortfolioAction({request}))

  }


OnCategorySubmit(request: CategoryInterface)
{
  this.store.dispatch(CategoryAction({request}))
  //console.log( this.Category$)
  this.InitilaizeValue();
}

}
