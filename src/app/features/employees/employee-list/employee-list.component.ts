import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { EmployeeService } from '../../../core/services/employee.service';
import { CommonModule } from '@angular/common';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],   // 👈 ADD THIS
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

constructor(private employeeService: EmployeeService  ){}    //okay we have register the service now here we will call the method to get the data from the api and store it in the array

  employees: Employee[] = [];   //  this is arrau t store the data 


  ngOnInit(): void {
  this.loadEmployees();
  }  

  loadEmployees()
  {
this.employeeService.GetAllEmployee().subscribe({
  next:(data) =>{
    this.employees = data;
    console.log(data);
  },
  error:(err) =>
  {
    console.log('Employee Fetching Error ',err);
  }
});
  }
}



