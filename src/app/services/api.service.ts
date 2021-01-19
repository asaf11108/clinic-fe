import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiURL = '';

  constructor(private http: HttpClient) {}

  // postUserLogin(user: User) {
  //   return this.http.post(`${this.apiURL}/auth/login`, user)
  //   .pipe(
  //     tap((res: User) => {
  //      // authentication and local storage code can go here
  //   })
  //  );
  // }

}
