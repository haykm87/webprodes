import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {select, Store} from "@ngrx/store";
import {isSubmitingAboutSelector, isSubmitingSelector, ValidationErrorSelector} from "../../store/selectors";
import {AddAboutAction} from "../../store/AddAbout.action";
import {LoginRequestInterface} from "../../types/LoginRequestInterface";
import {AboutUsInterface} from "../../../shared/interface/about.interface";

@Component({
  selector: 'app-create.about',
  templateUrl: './create.about.component.html',
  styleUrls: ['./create.about.component.css']
})
export class CreateAboutComponent implements OnInit {
  form: FormGroup;
  Backenderrors$ : Observable<BackendErrorsInterface | null>;
  isSubmiting$ : Observable<boolean | null>;
  constructor(private  auth: AuthService, private store: Store,) { }

  ngOnInit(): void {
    this.InitilaizeValue();
this.InitilaizeForm();

  }

  InitilaizeValue(): void
  {
   // this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector));
    //  console.log(this.Backenderrors$)
    this.Backenderrors$ = this.store.pipe(select(ValidationErrorSelector));
    this.isSubmiting$ = this.store.pipe(select(isSubmitingAboutSelector));
  }
  InitilaizeForm(): void
  {
    this.form = new FormGroup(
      {
        "title": new FormControl("", Validators.required),
        "description": new FormControl("", Validators.required),
        "fulldescription": new FormControl("", Validators.required),
        "Photo": new FormControl("", Validators.required)}
    );
  }

  submit()
  {

    if(this.form.invalid)
    {
      return
    }
    const request: AboutUsInterface = {
      title:this.form.value.title,
      description:this.form.value.description,
      fulldescription:this.form.value.fulldescription,
      Photo:this.form.value.Photo,
    }
   this.store.dispatch(AddAboutAction({request}))

  }

}
