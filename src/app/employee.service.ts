import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

//  private _url:string ="/assets/jsonfile/employeeDetails.json";
 _url ="http://localhost:5555/employeeDetails";

  getEmployee(){
    return this._http.get<Employee[]>(this._url);
  }
}
