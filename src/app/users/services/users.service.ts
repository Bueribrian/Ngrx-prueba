import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(delay(2000));
  }

}
