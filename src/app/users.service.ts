import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(`${this.url}/users`)
      .pipe(map(res => res.json()))
      .pipe(map(res => res.users));
  }

  signin(email, password){
    return this.http.post(`${this.url}/users`, {email, password})
      .pipe(map(res => res.json()),
      catchError(err => {
        return throwError(err);
      }))
  }

  signup(email, password){
    return this.http.post(`${this.url}/users`, {email, password})
      .pipe(map(res => res.json()),
      catchError(err => {
        return throwError(err);
      }))
  }

  changeStatus({email, password, status}){
    let method = '';
    if (+status === 1){
      method = 'delete';
    } else {
      method = 'confirm';
    }
    return this.http.post(`${this.url}/users/${method}`, {email, password})
      .pipe(map(res => res.json()))
      .pipe(map(res => res.user), 
      catchError(err => {
        return throwError(err);
      }))
  }

}
