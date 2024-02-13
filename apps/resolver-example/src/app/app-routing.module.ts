import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WithResolverComponent } from './components/with-resolver/with-resolver.component';
import { WithoutResolverComponent } from './components/without-resolver/without-resolver.component';
import { listUsersResolver } from './core/resolver/list-users.resolver';

const withoutResolverUrl = 'without-resolver';

const routes: Route[] = [
  { path: withoutResolverUrl, component: WithoutResolverComponent },
  {
    path: 'with-resolver',
    component: WithResolverComponent,
    resolve: { users: listUsersResolver },
  },
  { path: '', pathMatch: 'full', redirectTo: withoutResolverUrl },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
