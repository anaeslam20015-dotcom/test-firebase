import { Routes } from '@angular/router';
import { StoreComponent } from './firebase-store/store/store/StoreComponent';
import { AuthComponent } from './Authentication/Auth/auth/auth.component';
import { LogComponent } from './Authentication/log/log/log.component';
import { SignComponent } from './Authentication/sign/sign/sign.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { AuthGurd } from './Authentication/dashboard/authGuird';

export const routes: Routes = [
  { path: 'fireStroge', component: StoreComponent, title: 'Database' },
  { path: 'fireAuth', component: AuthComponent, title: 'Authentication ' },
  { path: 'log-in', component: LogComponent, title: 'Log in' },
  { path: 'sign-up', component: SignComponent, title: 'Sign up' },
  {
    path: 'account',
    loadComponent: () =>
      import('./Authentication/Account/account/account.component').then(
        (m) => m.AccountComponent,
      ),
    canActivate: [AuthGurd],
    title: 'Acount',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Authentication/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    canActivate: [AuthGurd],
    title: 'Dashboard',
  },
  { path: '', redirectTo: 'fireStroge', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
