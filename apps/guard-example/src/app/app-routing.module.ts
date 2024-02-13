import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProtectedComponent } from './components/protected/protected.component';
import { WithResolverComponent } from './components/with-resolver/with-resolver.component';
import { WithoutResolverComponent } from './components/without-resolver/without-resolver.component';
import { authGuard } from './core/guard/auth.guard';
import { listUsersResolver } from './core/resolver/list-users.resolver';

const withoutResolverUrl = 'without-resolver';
export const withResolverUrl = 'with-resolver';

const routes: Route[] = [
  { path: withoutResolverUrl, component: WithoutResolverComponent },
  {
    path: withResolverUrl,
    component: WithResolverComponent,
    resolve: { users: listUsersResolver },
  },
  {
    path: 'protected',
    canActivate: [authGuard],
    component: ProtectedComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: withoutResolverUrl },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
