import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutPageComponent } from './shared/layout-page/layout-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TargetsComponent } from './targets/targets.component';
import { MainPageComponent } from './main-page/main-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SwiperModule} from "swiper/angular";
import { PortfolioComponent } from './portfolio/portfolio.component';
import {AuthModule} from "./auth/auth.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/service/auth.interceptor";
import { SwaperComponent } from './shared/swaper/swaper.component';
import {HomeReducer} from "./shared/Store/Reducer";

import {GetSliderEffect} from "./shared/Store/Effects/GetSlidereEffect";
import {QuillModule} from "ngx-quill";
import { OurTeamComponent } from './our-team/our-team.component';
import { OurServiceComponent } from './our-service/our-service.component';
import {GetAboutEffect} from "./shared/Store/Effects/GetAboutEffect";
import { SortingPortfolioPipe } from './shared/pipes/sorting-portfolio.pipe';
import {GETPortfolioEffect} from "./shared/Store/Effects/GetPortfolioEffect";
import {GETServicesEffect} from "./shared/Store/Effects/GetServicesEffect";
import {GETTeamEffect} from "./shared/Store/Effects/GetTeamtEffect";
import {AboutUsMainComponent} from "./about-us-main/about-us.component";
import {ServiceWorkerModule} from "@angular/service-worker";
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioAllComponent } from './portfolio-all/portfolio-all.component';
import {GETPortfolioEightEffect} from "./shared/Store/Effects/GetPortfolioEightEffect";
import {Authreducer} from "./auth/store/Reducer";
import {Aboutreducer} from "./auth/store/ReducerAddAboute";
import {PortfolioReducer} from "./auth/store/ReducerPortfolio";
import {PortfolioAllReducer} from "./shared/Store/Reducer_portfplio";


//import { BackendErrorMessageComponent } from './shared/backend-error-message/backend-error-message.component';

const InterserverProvide : Provider = {
  provide: HTTP_INTERCEPTORS,
  multi:true,
  useClass: AuthInterceptor

}
export const reducers: ActionReducerMap<any> =
  {
    home: HomeReducer,
    PortfolioAll: PortfolioAllReducer,

  };
@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    AboutUsComponent,
    BlogComponent,
    ContactComponent,
    TargetsComponent,
    MainPageComponent,
    PortfolioComponent,
    SwaperComponent,
    OurTeamComponent,
    OurServiceComponent,
    SortingPortfolioPipe,
    AboutUsMainComponent,
    FooterComponent,
    PortfolioAllComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    AuthModule,

    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot( reducers),
    EffectsModule.forRoot([GetSliderEffect,GetAboutEffect, GETPortfolioEffect,
      GETServicesEffect, GETTeamEffect, GETPortfolioEightEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    QuillModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [ InterserverProvide],
  bootstrap: [AppComponent]
})
export class AppModule { }
