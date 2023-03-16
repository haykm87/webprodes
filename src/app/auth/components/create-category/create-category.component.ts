import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {AuthService} from "../../service/auth.service";
import {select, Store} from "@ngrx/store";
import {
  isSubmitingAboutSelector,
  isSubmitingPortfolioSelector,
  PortfoliErrorSelector,
  ValidationErrorSelector
} from "../../store/selectors";

import {CategoryInterface} from "../../../shared/interface/Category.interface";
import {CategoryAction} from "../../store/Actions/actionsCategory";

@Component({
  selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup;
  Backenderrors$ : Observable<BackendErrorsInterface | null>;
  isSubmiting$ : Observable<boolean | null>;
  @Output() newItemEvent = new EventEmitter<CategoryInterface>();
  constructor(private  auth: AuthService, private store: Store,) { }

  ngOnInit(): void {
    this.InitilaizeValue();
    this.InitilaizeForm();

  }

  InitilaizeValue(): void
  {
    // this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector));
    //  console.log(this.Backenderrors$)
    this.Backenderrors$ = this.store.pipe(select(PortfoliErrorSelector));
    this.isSubmiting$ = this.store.pipe(select(isSubmitingPortfolioSelector));
  }
  InitilaizeForm(): void
  {
    this.form = new FormGroup(
      {
        "name": new FormControl("", Validators.required)
      }
    );
  }

  submit()
  {

    if(this.form.invalid)
    {
      return
    }
    const request: CategoryInterface = {
      name: this.form.value.name,

    }

    this.newItemEvent.emit(request);
  }

}
