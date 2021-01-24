import { APIService } from './API.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

import { AmplifyAuthService } from './services/amplify-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'clinic-fe';

  constructor(private amplifyAuthService: AmplifyAuthService, private apiService: APIService) {
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      // this.signUp();
      // this.signIn();
      // this.apiService.ListTodos().then(console.dir)
    }, 5000);
  }

  query() {
    // this.amplifyAuthService.client.
  }

  signUp() {
    Auth.signUp({
      username: 'asaf11108',
      password: '62626262',
      attributes: {
        email: 'asaf11108@gmail.com'
      }
    }).then(({ user }) => {
      console.log(user)
    }).catch(error => {
      console.log('error signing up:', error);
    })
  }

  signIn() {
    Auth.signIn({
      username: 'irisreg7',
      password: '62626262',
    }).then(res => {
      console.dir(res)
    }).catch(error => {
      console.log('error signing in:', error);
    })
  }

}
