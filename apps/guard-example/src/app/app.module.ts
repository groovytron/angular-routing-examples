import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  multiTranslateLoader,
  ObButtonModule,
  ObIconModule,
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  ObNotificationModule,
  ObSpinnerModule,
} from '@oblique/oblique';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WithoutResolverComponent } from './components/without-resolver/without-resolver.component';
import { WithResolverComponent } from './components/with-resolver/with-resolver.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular-routing-examples/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WithoutResolverComponent,
    WithResolverComponent,
    UsersListComponent,
    ProtectedComponent,
    LoginDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ObButtonModule,
    ObIconModule.forRoot(),
    ObMasterLayoutModule,
    ObNotificationModule,
    ObSpinnerModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(multiTranslateLoader()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly masterLayoutConfig: ObMasterLayoutConfig) {
    const english = 'en';

    this.masterLayoutConfig.locale.locales = [english];
    this.masterLayoutConfig.locale.defaultLanguage = english;
  }
}
