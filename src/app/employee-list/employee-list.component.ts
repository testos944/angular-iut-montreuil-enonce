import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  service: EmployeeService;
  employees$: Observable<Employee[]>;

  constructor(service: EmployeeService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.employees$ = this.service.getEmployees();
  }

  deleteEmployee(employee: Employee): void {
    console.log('About to fire employee:' + employee.name);
  }
}
