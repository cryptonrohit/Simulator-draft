import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-dummy-employee',
  templateUrl: './dummy-employee.component.html',
  styleUrls: ['./dummy-employee.component.css']
})
export class DummyEmployeeComponent implements OnInit {

employee: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    return this.employeeService.getEmployee()
    .subscribe(data=> this.employee = data)
  }

}
