import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TokenData } from '../models/token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject!: BehaviorSubject<TokenData>;
  public user!: Observable<TokenData>;
  headers: any;

  constructor(private router: Router, private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('tenantKey', 'root');
    const userObj = localStorage.getItem('user_data');
    const userdata = userObj ? JSON.parse(userObj) : null;
    this.userSubject = new BehaviorSubject<TokenData>(userdata);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): TokenData {
    return this.userSubject.value;
  }


  token(email: any, password: any) {
    return this.http.post<any>(`${environment.apiUrl}/tokens`, { email, password }, { 'headers': this.headers } )
        .pipe(map(res => {
           // console.log(res)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let responseData = res.data;
            // responseData.role =  this.getCurrentUserRole(res.data.token);
            localStorage.setItem('user_data', JSON.stringify(responseData));
            this.userSubject.next(responseData);
            return res;
        }));
  }

  newpassword(email: any, password: any, newPassword: any) {
    return this.http.post<any>(`${environment.apiUrl}/tokens/new-password`, { email, password, newPassword }, { 'headers': this.headers } )
        .pipe(map(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let responseData = res.data;
            // responseData.role =  this.getCurrentUserRole(res.data.token);
            localStorage.setItem('user_data', JSON.stringify(responseData));
            this.userSubject.next(responseData);
            return res;
        }));
}

changePasswordRequest(data: any) {
  return this.http.post(`${environment.apiUrl}/identity/change-password`, data);
}

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user_data');
    const userObj = localStorage.getItem('user_data');
    const userdata = userObj ? JSON.parse(userObj) : null;
    this.userSubject.next(userdata);
    this.router.navigate(['/login']);
  }
}
