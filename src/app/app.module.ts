import { MatetialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromLogin from './components/login/login.reducer';
import { LoginEffects } from './components/login/login.effects';
import { AmplifyAuthService } from './services/amplify-auth.service';
import { ReactiveComponentModule } from '@ngrx/component';

const rootReducers = {
  login: fromLogin.reducer
};

const rootEffects = [
  LoginEffects
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    PageNotFoundComponent,
    UnauthorizedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatetialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducers, {}),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
