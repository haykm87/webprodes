import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {registerAction} from "../../store/actions";
import {AuthService} from "../../service/auth.service";
import { CorrentUserInerface} from "../../../shared/CurrentUser";
import {Observable} from "rxjs";
import {isSubmitingSelector, ValidationErrorSelector} from "../../store/selectors";
import {LoginRequestInterface} from "../../types/LoginRequestInterface";
import {BackendErrorsInterface} from "../../../shared/BackendError.Interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  form: FormGroup ;
  message:string ="";
 // submited: Boolean =false;
  // @ts-ignore
  isSubmiting$ : Observable<boolean>;
  // @ts-ignore
  Backenderrors$ : Observable<BackendErrorsInterface | null>;
  constructor(private store: Store, private authServ: AuthService) { }

  ngOnInit(): void {
    this.InitilaizeForm();
    this.InitilaizeValue();

  }

  InitilaizeValue(): void
  {
    this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector));
  //  console.log(this.Backenderrors$)
    this.Backenderrors$ = this.store.pipe(select(ValidationErrorSelector));
  }

  InitilaizeForm(): void
  {
    this.form =new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      }
    );
  }

  submit(): void
  {
    const request: LoginRequestInterface = {
      email:this.form.value.email,
      password:this.form.value.password,
      returnSecureToken :true
    }
    this.store.dispatch(registerAction({request}));
    /*this.authServ.GetCurrentUser().subscribe((res:CorrentUserInerface)=> {
      console.log(res);
    });*/
  }
}
