import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth }
  }

  verificaAutenticacion(): Observable<boolean> {
    if( !localStorage.getItem('token')){
      return of(false);
    }
    return of(true);
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( auth => {
        this._auth = auth;
      }),
      tap( auth => {
        localStorage.setItem('id', auth.id);
      })
    )
  }

  logout(){
    this._auth = undefined;
  }
}
