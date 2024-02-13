import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  ObIconModule,
  ObMasterLayoutModule,
  ObSpinnerModule,
} from '@oblique/oblique';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WithoutResolverComponent } from './components/without-resolver/without-resolver.component';
import { WithResolverComponent } from './components/with-resolver/with-resolver.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular-routing-examples/http';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutResolverComponent,
    WithResolverComponent,
    UsersListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    ObIconModule.forRoot(),
    ObMasterLayoutModule,
    ObSpinnerModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
