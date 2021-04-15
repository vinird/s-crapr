import { Routes } from '@angular/router';

import { DashboardHomeComponent } from '../components/pages/dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { JobDetailComponent } from '../components/pages/dashboard/jobs/job-detail/job-detail.component';
import { JobComponent } from '../components/pages/dashboard/jobs/job/job.component';
import { JobsComponent } from '../components/pages/dashboard/jobs/jobs.component';
import { ResultsComponent } from '../components/pages/dashboard/results/results.component';
import { ScrapperDetailsComponent } from '../components/pages/dashboard/scrappers/scrapper-details/scrapper-details.component';
import { ScrapperComponent } from '../components/pages/dashboard/scrappers/scrapper/scrapper.component';
import { ScrappersComponent } from '../components/pages/dashboard/scrappers/scrappers.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { AuthGuard } from '../guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: DashboardHomeComponent },
      { path: 'scrappers', component: ScrappersComponent },
      { path: 'scrappers/create', component: ScrapperComponent },
      { path: 'scrappers/update/:id', component: ScrapperComponent },
      { path: 'scrappers/:id', component: ScrapperDetailsComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'jobs/create', component: JobComponent },
      { path: 'jobs/update/:id', component: JobComponent },
      { path: 'jobs/:id', component: JobDetailComponent },
      { path: 'jobs-results/:id', component: ResultsComponent },
      { path: '404', component: NotFoundComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
