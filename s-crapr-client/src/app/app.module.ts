import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { ModalModule } from '@bit/valor-software.ngx-bootstrap.modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NavigationMenuComponent } from './components/layout/navigation-menu/navigation-menu.component';
import { DashboardHomeComponent } from './components/pages/dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { JobDetailComponent } from './components/pages/dashboard/jobs/job-detail/job-detail.component';
import { JobItemComponent } from './components/pages/dashboard/jobs/job-item/job-item.component';
import { JobsComponent } from './components/pages/dashboard/jobs/jobs.component';
import { ScrapperDetailsComponent } from './components/pages/dashboard/scrappers/scrapper-details/scrapper-details.component';
import { ScrapperItemComponent } from './components/pages/dashboard/scrappers/scrapper-item/scrapper-item.component';
import { ScrapperComponent } from './components/pages/dashboard/scrappers/scrapper/scrapper.component';
import { ScrappersComponent } from './components/pages/dashboard/scrappers/scrappers.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AuthService } from './services/auth/auth.service';
import { ScrappersService } from './services/scrappers/scrappers.service';
import { JobComponent } from './components/pages/dashboard/jobs/job/job.component';
import { ResultsComponent } from './components/pages/dashboard/results/results.component';
import { ResultComponent } from './components/pages/dashboard/results/result/result.component';
import { ResultItemComponent } from './components/pages/dashboard/results/result-item/result-item.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationMenuComponent,
    DashboardComponent,
    ScrappersComponent,
    JobsComponent,
    NotFoundComponent,
    ScrapperItemComponent,
    ScrapperComponent,
    ScrapperDetailsComponent,
    LoginComponent,
    DashboardHomeComponent,
    JobItemComponent,
    JobDetailComponent,
    JobComponent,
    ResultsComponent,
    ResultComponent,
    ResultItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
    NgProgressModule.withConfig({ thick: true, spinnerPosition: 'left' }),
    NgProgressHttpModule,
    ModalModule.forRoot()
  ],
  providers: [
    httpInterceptorProviders,
    ScrappersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
