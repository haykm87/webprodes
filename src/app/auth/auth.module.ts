import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {AuthService} from "./service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {Aboutreducer} from "./store/ReducerAddAboute";
import {EffectsModule} from "@ngrx/effects";
import {RegistrEffect} from "./store/registr-effect";
import {BackendErrorMessageModule} from "../shared/backend-error-message/backend-error-message.module";
import {PersistanceService} from "../shared/service/persistance.service";
import {GetCurrentUsereffect} from "./store/GetCurrentUsereffect";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { CreateAboutComponent } from './components/create.about/create.about.component';
import {CR} from "@angular/compiler/src/i18n/serializers/xml_helper";
import {QuillModule} from "ngx-quill";
import {Authreducer} from "./store/Reducer";
import {AddAbouteEffect} from "./store/AddAboute.effect";
import { CreateOurTeamComponent } from './components/create-our-team/create-our-team.component';
import {OurTemaEffect} from "./store/Effects/OurTema-effect";
import {CreateOurServicesomponent} from "./components/create-our-services/create-our-services.component";
import {OurServicesffect} from "./store/Effects/OurServices-effect";
import {CreateCategoryComponent} from "./components/create-category/create-category.component";
import {CategoryEffect} from "./store/Effects/Category-effect";
import {PortfolioReducer} from "./store/ReducerPortfolio";
import {CreatePortfolioComponent} from "./components/create-portfolio/create-portfolio.component";
import {GetCategoryEffect} from "./store/Effects/Get-Category-effect";
import {AppStateInterface} from "../shared/appStateInterface";
import {PortfolioEffect} from "./store/Effects/Portfolio-effect";
import {CreateSliderComponent} from "./components/create-slider/create-slider.component";
import {SliderEffect} from "./store/Effects/Slider-effect";
import {AuthGuard} from "./service/auth.guard";
import {GetAUthPortfolioEffect} from "./store/Effects/Get-Portfolio-effect";
import {DeleteAUthPortfolioEffect} from "./store/Effects/Delete-Portfolio-effect";
import { EditPortfolioComponent } from './components/edit-portfolio/edit-portfolio.component';
import {GetAUthPortfolioByIdEffect} from "./store/Effects/Get-Portfolio-By-Id-effect";
import {UpdateAUthPortfolioEffect} from "./store/Effects/Update-Portfolio-effect";
import { SearchPortfolioPipePipe } from './pipes/search-portfolio-pipe.pipe';
import {LogoutEffect} from "./store/Effects/Logout-effect";

const routs: Routes =[

  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {path:'', redirectTo: '/admin/registr', pathMatch: 'full' },
  {
    path: 'registr',
    component: RegisterComponent
  },
      {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'createabout',
        component: CreateAboutComponent,canActivate: [AuthGuard]
      },
      {
        path: 'ourteam',
        component: CreateOurTeamComponent, canActivate: [AuthGuard]
      },
      {
        path: 'Services',
        component: CreateOurServicesomponent,canActivate: [AuthGuard]
      },
      {
        path: 'Portfolio',
        component: CreatePortfolioComponent, canActivate: [AuthGuard]
      },
      {
        path: 'Portfolio/:id/edit',
        component: EditPortfolioComponent, canActivate: [AuthGuard]
      },

      {
        path: 'Slider',
        component: CreateSliderComponent, canActivate: [AuthGuard]
      },
    ]
}
]

export const reducers: ActionReducerMap<any> =
  {
    authreducer: Authreducer,
    aboutreducer: Aboutreducer,
    Portfolio: PortfolioReducer
  };
@NgModule({
  declarations: [
    RegisterComponent,
    AdminLayoutComponent,
    CreateAboutComponent,
    DashboardComponent,
    CreateOurTeamComponent,
    CreateOurServicesomponent,
    CreateCategoryComponent,
    CreatePortfolioComponent,
    CreateSliderComponent,
    EditPortfolioComponent,
    SearchPortfolioPipePipe
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild(routs),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers ), //

    EffectsModule.forFeature([RegistrEffect, GetCurrentUsereffect,
      AddAbouteEffect, OurTemaEffect, OurServicesffect, CategoryEffect, GetCategoryEffect,
     PortfolioEffect, SliderEffect, GetAUthPortfolioEffect, DeleteAUthPortfolioEffect,
      GetAUthPortfolioByIdEffect, UpdateAUthPortfolioEffect, LogoutEffect]),
    BackendErrorMessageModule

  ],
  providers:[AuthService, PersistanceService]
})
export class AuthModule { }
