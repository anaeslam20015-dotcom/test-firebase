import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGurd: CanActivateFn = () => {
  const auth = inject(Auth);
  const rout = inject(Router);

  if (auth.currentUser) {
    return true;
  }
  return rout.createUrlTree(['/log-in']);
};
