import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'clinic-fe';
  
  // signUp() {
  //   Auth.signUp({
  //     username: 'irisreg7',
  //     password: '62626262',
  //     attributes: {
  //       email: 'irisreg7@gmail.com'
  //     }
  //   }).then(({ user }) => {
  //     console.log(user)
  //   }).catch(error => {
  //     console.log('error signing up:', error);
  //   })
  // }
  ngOnInit(): void {
  //   setTimeout(() => {
  //     this.signUp();

  //   }, 5000)
  }

}
