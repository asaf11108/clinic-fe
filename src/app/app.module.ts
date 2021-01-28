import { MatButtonLoadingDirective } from './../directives/mat-button-loading.directive';
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
import * as fromLogin from './components/login/redux/login.reducer';
import { LoginEffects } from './components/login/redux/login.effects';
import { AmplifyAuthService } from './services/amplify-auth.service';
import { ReactiveComponentModule } from '@ngrx/component';
import { SearchComponent } from './components/search/search.component';
import { SearchTableComponent } from './components/search-table/search-table.component';
import * as fromSearch from './components/search/redux/search.reducer';
import { SearchEffects } from './components/search/redux/search.effects';

const rootReducers = {
  login: fromLogin.reducer,
  search: fromSearch.reducer
};

const rootEffects = [
  LoginEffects,
  SearchEffects
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    PageNotFoundComponent,
    UnauthorizedPageComponent,
    MatButtonLoadingDirective,
    SearchComponent,
    SearchTableComponent
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
