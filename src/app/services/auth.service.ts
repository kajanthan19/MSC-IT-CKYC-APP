import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
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

    if(email == 'admin@gmail.com' && password == '123456' ){
      let data: any = {
        username: email,
        id: 'awswss',
        role: 'Admin',
        refreshToken: 'assss',
        token: 'aswssddd'
      }
      localStorage.setItem('user_data', JSON.stringify(data));
      this.userSubject.next(data);
      return of(data)
    }else {
      return of(null)
    }

    // return this.http.post<any>(`${environment.apiUrl}/tokens`, { email, password }, { 'headers': this.headers } )
    //     .pipe(map(res => {
    //        // console.log(res)
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         let responseData = res.data;
    //         // responseData.role =  this.getCurrentUserRole(res.data.token);
    //         localStorage.setItem('user_data', JSON.stringify(responseData));
    //         this.userSubject.next(responseData);
    //         return res;
    //     }));
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user_data');
    if (token != null) {
      return true;
    }
    return false;
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
