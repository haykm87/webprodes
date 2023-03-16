import {Injectable} from '@angular/core';
import {filter, first, last, map, observable, Observable, of, take, tap} from "rxjs";
import {CategoryInterface} from "../interface/Category.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PersistanceService} from "./persistance.service";
import {SliderInterface} from "../interface/SliderInterface";
import {AboutUsInterface} from "../interface/about.interface";
import {GetUserRequestInterface, User} from "../../auth/types/GetUserRequestInterface";
import {Portfolio} from "../interface/portfolio.interface";
import {OurServicesInterface} from "../interface/our-services";
import {OurTeamInterface} from "../interface/our-team";
import {isBoolean} from "@ngrx/store/src/meta-reducers/utils";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private persServ: PersistanceService) {
  }

  GetSlider(): Observable<SliderInterface[]> {
    return this.http.get<any>(`${environment.FbUrl}/Slider.json`).pipe(
      map((response: { [key: string]: SliderInterface }) => {
        return Object
          .keys(response)
          .map(key => ({
            Name: response[key].Name,
            Photo: response[key].Photo,
            Photo2: response[key].Photo2,
            Photo3: response[key].Photo3,
            description: response[key].description,
            id: key,
            // date: new Date(response[key].date)
          }))
      }))
  }


  GetAbout(): Observable<AboutUsInterface> {
    return this.http.get<any>(`${environment.FbUrl}/About.json`).pipe(
      last(),

      map((response: { [key: string]: AboutUsInterface }) => {
        return Object
          .keys(response)
          .map(key => ({
            title: response[key].title,
            Photo: response[key].Photo,
            description: response[key].description,
            fulldescription: response[key].fulldescription,
            id: key,
            // date: new Date(response[key].date)
          }))
      }),

      map((res: AboutUsInterface[]) => {
        return res[0]
      }),
    )
  }

  GetPortfolio(): Observable<Portfolio[]> {
    return this.http.get<any>(`${environment.FbUrl}/Portfolio.json`).pipe(
      map((response: { [key: string]: Portfolio }) => {
        return Object
          .keys(response)
          .map(key => ({
            Name: response[key].Name,
            Photo: response[key].Photo,
            Category: response[key].Category,
            description: response[key].description,
            Link: response[key].Link,
            id: key,
            // date: new Date(response[key].date)
          }))
      }))
  }

  GetPortfolioEight(): Observable<Portfolio[]> {
    return this.http.get<any>(`${environment.FbUrl}/Portfolio.json`).pipe(
      filter(Boolean),
      map((response:{ [key: string]: Portfolio }) =>
        Object.keys(response).map(key => ({  Name: response[key].Name,
            Photo: response[key].Photo,
            Category: response[key].Category,
            description: response[key].description,
            Link: response[key].Link,
            id: key,
        })
        )),
      map(x => x
        .slice(0, Math.min(8, x.length))

        ),

    )
  }

  GetServices(): Observable<OurServicesInterface[]> {
    return this.http.get<any>(`${environment.FbUrl}/OurServices.json`).pipe(
      map((response: { [key: string]: OurServicesInterface }) => {
        return Object
          .keys(response)
          .map(key => ({
            Name: response[key].Name,
            Photo: response[key].Photo,
            description: response[key].description,
            id: key,

            // date: new Date(response[key].date)
          }))
      }))
  }

  GetTeam(): Observable<OurTeamInterface[]> {
    return this.http.get<any>(`${environment.FbUrl}/OurTeam.json`).pipe(
      map((response: { [key: string]: OurTeamInterface }) => {
        return Object
          .keys(response)
          .map(key => ({
            Name: response[key].Name,
            Photo: response[key].Photo,
            description: response[key].description,
            id: key,

            // date: new Date(response[key].date)
          }))
      }))
  }

}
