import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {first, map, mergeMap, Observable, take} from "rxjs";
import {CorrentUserInerface} from "../../shared/CurrentUser";
import {LoginRequestInterface} from "../types/LoginRequestInterface";
import {PersistanceService} from "../../shared/service/persistance.service";
import {GetUserRequestInterface, User} from "../types/GetUserRequestInterface";
import { AboutUsInterface} from "../../shared/interface/about.interface";
import {OurTeamInterface} from "../../shared/interface/our-team";
import {OurServicesInterface} from "../../shared/interface/our-services";
import {CategoryInterface} from "../../shared/interface/Category.interface";
import {Portfolio} from "../../shared/interface/portfolio.interface";
import {SliderInterface} from "../../shared/interface/SliderInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private  persServ: PersistanceService) { }

  LogIn(user: LoginRequestInterface): Observable<CorrentUserInerface>
  {
    return  this.http.post<CorrentUserInerface>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
  }

  GetCurrentUser(): Observable<CorrentUserInerface>  //
  {
    const idToken = {
      idToken: this.persServ.get('accessToken')
    };
    //   console.log(idToken);
    return this.http.post<GetUserRequestInterface>(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.apiKey}`,
      idToken
    ).pipe(
    /*  first(),
      map((res: GetUserRequestInterface) => {
        return res.users[0]
      }),*/
mergeMap((res: GetUserRequestInterface) => res.users),
      take(1),


      map((response:User) => {
          return {
            displayName: "",
           // kind: '',
            email: response.email,
            localId: response.localId,
            idToken: idToken.idToken,
            registered: true
          }
        }
      )
    )
  }
      /*map((response)=>{
        return Object
          .keys(response).map(key=>{
             return {
              displayName:"",
              kind:'',
              email: response[key].email,
              localId: response[key].localId,
              idToken: idToken.idToken,
              registered: true

          }


          })
      })*/
 addAboutUs(post: AboutUsInterface) :Observable<AboutUsInterface>
 {
   return this.http.post<any>(`${environment.FbUrl}/About.json`, post).pipe(
     map((res)=>
     {
       const request: AboutUsInterface = {
         title: res.title,
         description:res.description,
         fulldescription:res.fulldescription,
         Photo: res.Photo,
       }
       return request
     })
   )
 }

  addOurTeam(post: OurTeamInterface) :Observable<OurTeamInterface>
  {
    return this.http.post<any>(`${environment.FbUrl}/OurTeam.json`, post).pipe(
      map((res)=>
      {
        const request: OurTeamInterface = {
          Name: res.Name,
          description:res.description,
          Photo: res.Photo,
        }
        return request
      })
    )
  }

  addOurServices(post: OurServicesInterface) :Observable<OurServicesInterface>
  {
    return this.http.post<any>(`${environment.FbUrl}/OurServices.json`, post).pipe(
      map((res)=>
      {
        const request: OurServicesInterface = {
          Name: res.Name,
          description:res.description,
          Photo: res.Photo,
        }
        return request
      })
    )
  }

  addCategory(post: CategoryInterface) :Observable<CategoryInterface>
  {
    return this.http.post<any>(`${environment.FbUrl}/Category.json`, post).pipe(
      map((res)=>
      {
        const request: CategoryInterface = {
          name: res.Name,

        }
        return request
      })
    )
  }

  GetCategory() :Observable<CategoryInterface[]>
  {
    return this.http.get<any>(`${environment.FbUrl}/Category.json`).pipe(
      map((response: {[key: string]: CategoryInterface}) => {
      return Object
        .keys(response)
        .map(key => ({
          name: response[key].name,
          id: key,
         // date: new Date(response[key].date)
        }))
    }))
  }

  addPortfolio(post: Portfolio) :Observable<Portfolio>
  {
    return this.http.post<any>(`${environment.FbUrl}/Portfolio.json`, post).pipe(
      map((res)=>
      {
        const request: Portfolio = {
          Name: res.name,
          description: res.description,
          Photo: res.Photo,
          Category: res.Category,
          Link: res.Link,
        }
        return request
      })
    )
  }

  addSlider(post: SliderInterface) :Observable<SliderInterface>
  {
    return this.http.post<any>(`${environment.FbUrl}/Slider.json`, post).pipe(
      map((res)=>
      {
        const request: SliderInterface = {
          Name: res.name,
          description: res.description,
          Photo: res.Photo,
          Photo2: res.Photo2,
          Photo3: res.Photo3,
        }
        return request
      })
    )
  }


  removePortfolio(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.FbUrl}/Portfolio/${id}.json`)
  }

  GetPortfolioById(id: string) :Observable<Portfolio>
  {
    return this.http.get(`${environment.FbUrl}/Portfolio/${id}.json`).pipe(
      map((post: Portfolio) =>{
          return {
            ...post,
            id
          }
        }
      )
    )
  }

  UbdatePortfolio(portfolio: Portfolio) :Observable<Portfolio>
  {
    return this.http.patch<Portfolio>(`${environment.FbUrl}/Portfolio/${portfolio.id}.json`, portfolio);
  }

  }



/*Object
  .keys(response)*/
