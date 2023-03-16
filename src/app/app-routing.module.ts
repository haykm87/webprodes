import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LayoutPageComponent} from "./shared/layout-page/layout-page.component";


import {ContactComponent} from "./contact/contact.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BlogComponent} from "./blog/blog.component";
import {AboutUsMainComponent} from "./about-us-main/about-us.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {OurServiceComponent} from "./our-service/our-service.component";
import {PortfolioAllComponent} from "./portfolio-all/portfolio-all.component";


const routes: Routes = [
  { path: '', component: LayoutPageComponent,
   children:[

     {path: '', component: MainPageComponent},
     {
       path:'', redirectTo:'/', pathMatch:'full'
     },
     {
       path:'about-us', component: AboutUsMainComponent
     },
     {
       path:'portfolio', component: PortfolioAllComponent
     },
     {
       path: 'service', component: OurServiceComponent
     },
     {
       path: 'contact', component: ContactComponent
     }

   ]
  },
  {path:'admin' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
