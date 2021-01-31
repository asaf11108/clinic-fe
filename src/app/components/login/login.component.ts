import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { isLoging, loginHasError } from './redux/login.selectors';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, loginSuccess } from './redux/login.actions';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
  complete$: Observable<any>;
  isLoging$: Observable<any>;
  hasError$: Observable<any>;

  constructor(private store: Store, private actions$: Actions, private router: Router) {
    this.complete$ = this.actions$.pipe(ofType(loginSuccess));
    this.isLoging$ = this.store.select(isLoging);
    this.hasError$ = this.store.select(loginHasError);
  }
  
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  ngOnInit() {
    this.complete$.pipe(untilDestroyed(this)).subscribe(() => this.router.navigate(['']))
  }
  
  submit() {
    this.store.dispatch(login(this.loginForm.value));
  }
  
  ngOnDestroy(): void {
  }
}
