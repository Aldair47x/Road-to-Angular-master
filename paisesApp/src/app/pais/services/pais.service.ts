import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interfaces/pais.interface';
import { RESTCapitalResponse } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<RESTCountryResponse[]> {

    const url = `${ this.apiUrl }/name/${termino }`;
    return this.http.get<RESTCountryResponse[]>( url );

  }

  buscarCapital( termino: string ): Observable<RESTCapitalResponse[]> {

    const url = `${ this.apiUrl }/capital/${termino }`;
    return this.http.get<RESTCapitalResponse[]>( url );

  }

  buscarRegion( termino: string ): Observable<RESTCapitalResponse[]> {

    const url = `${ this.apiUrl }/name/${termino }`;
    return this.http.get<RESTCountryResponse[]>( url );

  }

  
}
