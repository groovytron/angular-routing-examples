import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { inject } from '@angular/core';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { withResolverUrl } from '../../app-routing.module';
import { ObNotificationService } from '@oblique/oblique';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const matDialog = inject(MatDialog);
  const notifications = inject(ObNotificationService);
  const router = inject(Router);

  const dialog = matDialog.open(LoginDialogComponent);

  return dialog.afterClosed().pipe(
    map((result: boolean | undefined | null) => {
      if (result === true) {
        return result;
      }

      notifications.error(
        'Oups ! You are not authenticated and cannot access this page.'
      );

      void router.navigateByUrl(`/${withResolverUrl}`);

      return false;
    })
  );
};
