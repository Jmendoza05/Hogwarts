import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persons } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  url = 'https://hp-api.herokuapp.com/api/characters/house/'
  constructor(private http: HttpClient) { }

  obtenerpersonaje(home: string):Observable<any>{
    return this.http.get(this.url+home);  
  }
}
