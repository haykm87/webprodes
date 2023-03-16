import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";
import {AuthService} from "../../service/auth.service";
import {select, Store} from "@ngrx/store";
import {AbouteErrorSelector, isSubmitingAboutSelector, ValidationErrorSelector} from "../../store/selectors";
import {AboutUsInterface} from "../../../shared/interface/about.interface";
import {AddAboutAction} from "../../store/AddAbout.action";
import {OurTeamInterface} from "../../../shared/interface/our-team";
import {OurTeamAction} from "../../store/Actions/actionsOurTeam";

@Component({
  selector: 'app-create-our-team',
  templateUrl: './create-our-team.component.html',
  styleUrls: ['./create-our-team.component.css']
})
export class CreateOurTeamComponent implements OnInit {

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
    this.Backenderrors$ = this.store.pipe(select(AbouteErrorSelector));
    this.isSubmiting$ = this.store.pipe(select(isSubmitingAboutSelector));
  }
  InitilaizeForm(): void
  {
    this.form = new FormGroup(
      {
        "Name": new FormControl("", Validators.required),
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
    const request: OurTeamInterface = {
      Name:this.form.value.Name,
      description:this.form.value.description,
      Photo:this.form.value.Photo,
    }
    this.store.dispatch(OurTeamAction({request}))

  }

}
