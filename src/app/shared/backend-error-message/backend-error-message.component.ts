import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../BackendError.Interface";

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.css']
})
export class BackendErrorMessageComponent implements OnInit {

 // @ts-ignore
  @Input() Backenderrors :BackendErrorsInterface;
 errorMassage: string[]=[];
  constructor() { }

  ngOnInit(): void {
  //  console.log(this.Backenderrors);
    this.errorMassage = Object.keys(this.Backenderrors).map(
      (name:string)=>{
        /*const message = Object.keys(this.Backenderrors[name]).map(
          (errorName:string)=> {
            const messageErr = this.Backenderrors[name][errorName];
            return `${errorName}  ${messageErr}`;
          }
        );*/
        const message = this.Backenderrors[name]['message']
        console.log(message);
        return `${message}`
      }
    )
  }

}
