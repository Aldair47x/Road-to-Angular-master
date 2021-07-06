import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'XmIy9xJIodnVZxeW3tKAFmT8Y3zyBEhr';
  private url: string = "https://api.giphy.com/v1/gifs/search";

  public resultados: any[] = [];

  constructor(private http: HttpClient) { 
    if( localStorage.getItem('historial') ) {
      this._historial = JSON.parse( localStorage.getItem('historial')! ) ;
    }

    if( localStorage.getItem('resultados') ) {
      this.resultados = JSON.parse( localStorage.getItem('resultados')! ) ;
    }
  }

  get historial () {
    return [...this._historial];
  }

  buscarGifs( query: string = "" ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)

    this.http.get( this.url, { params })
    .subscribe( ( response: any) => {
      this.resultados = response.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
      // console.log(this.resultados);
    });

    
  }

  

}
