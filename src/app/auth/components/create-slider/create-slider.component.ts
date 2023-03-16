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
import {SliderInterface} from "../../../shared/interface/SliderInterface";
import {AddSliderAction} from "../../store/Actions/actionsAddSlider";

@Component({
  selector: 'create-slider',
  templateUrl: './create-slider.component.html',
  styleUrls: ['./create-slider.component.css']
})
export class CreateSliderComponent implements OnInit {

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
        "Photo2": new FormControl("", Validators.required),
        "Photo3": new FormControl("", Validators.required),
        "description": new FormControl("", Validators.required),
        "Photo": new FormControl("", Validators.required)}
    );
  }

  submit()
  {

    if(this.form.invalid)
    {
      return
    }
    const request: SliderInterface = {
      Name:this.form.value.Name,
      Photo2:this.form.value.Photo2,
      Photo3:this.form.value.Photo3,
      description:this.form.value.description,
      Photo:this.form.value.Photo,
    }

    this.store.dispatch(AddSliderAction({request}))

  }




}
