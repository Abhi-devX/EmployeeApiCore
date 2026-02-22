import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../shared/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) 

  {}

  private SwaggerApiUrl = 'http://localhost:5028/api/Employees';  //get url from swagger 


  //get Employeeeeee
GetAllEmployee():Observable<Employee[]>
{
return this.http.get<Employee[]>(this.SwaggerApiUrl);
}



   
}
