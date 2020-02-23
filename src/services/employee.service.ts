import { Injectable } from '@angular/core';
import originalData from '../assets/employees.json';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // this is an example in memory. In a real world you would do http calls in this class
  employeesData: Employee[];
  employees$: Observable<Employee[]>;

  constructor() {
    this.employeesData = originalData;
  }

  getEmployees(): Observable<Employee[]> {
    this.employees$ = of(this.employeesData);
    return this.employees$;
  }

  deleteEmployee(id: number) {
    this.employeesData = this.employeesData.filter(e => e.id !== id);
    this.employees$ = of(this.employeesData);
  }
}

export class Employee {
  id: number;
  lastname: string;
  name: string;
  birthdate: string;
  email: string;
  address: string;
  city: string;
  phone: string;
  sex: string;
  salary: number;
}