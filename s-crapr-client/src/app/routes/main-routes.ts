import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { ScrappersComponent } from '../components/pages/scrappers/scrappers.component';
import { JobsComponent } from '../components/pages/jobs/jobs.component';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scrappers', component: ScrappersComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
