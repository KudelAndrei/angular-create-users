import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ulr = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(`${this.ulr}/users`)
      .pipe(map(res => res.json()))
      .pipe(map(res => res.users));
  }

  loginIn(email, password){
    return this.http.post(`${this.ulr}/users`, {email, password})
      .pipe(map(res => res.json()),
      catchError(err => {
        return throwError(err);
      }))
  }

}
