import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NavigationMenuComponent } from './components/layout/navigation-menu/navigation-menu.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ScrappersComponent } from './components/pages/scrappers/scrappers.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ScrapperItemComponent } from './components/pages/scrappers/scrapper-item/scrapper-item.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
