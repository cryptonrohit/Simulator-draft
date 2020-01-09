import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from './data.model ';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  apiUrl = 'https://lw479a601b.execute-api.ap-south-1.amazonaws.com/test/pets';

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<Data[]>(this.apiUrl);
  }
}
