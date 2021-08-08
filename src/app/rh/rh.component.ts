import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from './../employee';
import {NgserviceService} from './ngservice.service';

@Component({
  selector: 'rh-root',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})

  export class RhComponent implements OnInit{
    public employees: Employee[];
    public editEmployee: Employee;
    public deleteEmployee: Employee;

    constructor(private ngService: NgserviceService){}

    ngOnInit() {
      this.getEmployees();
    }



    public getEmployees(): void {
      this.ngService.getEmployees().subscribe(
        (response: Employee[]) => {
          this.employees = response;
          console.log(this.employees);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }


    public onAddEmloyee(addForm: NgForm): void {
      document.getElementById('add-employee-form')!.click();
      this.ngService.addEmployee(addForm.value).subscribe(
        (response: Employee) => {
          console.log(response);
          this.getEmployees();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
    public UpdateEmloyee(employee: Employee): void {
      this.ngService.updateEmployee(employee).subscribe(
        (response: Employee) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public DeleteEmloyee(id: string): void {
      this.ngService.deleteEmployee(id).subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public searchEmployees(key: string): void {
      console.log(key);
      const results: Employee[] = [];
      for (const employee of this.employees) {
        if (
           employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.job.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.dept.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.dateemb.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.dateN.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          results.push(employee);
        }
      }
      this.employees = results;
      if (results.length === 0 || !key) {
        this.getEmployees();
      }
    }

    public OpenModal(employee: Employee, mode: string): void {
      const cont = document.getElementById('main')!;
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addEmployeeModal');
      }
      if (mode === 'edit') {
        this.editEmployee = employee;
        button.setAttribute('data-target', '#updateEmployeeModal');
      }
      if (mode === 'delete') {
        this.deleteEmployee = employee;
        button.setAttribute('data-target', '#deleteModal');
      }
      cont.appendChild(button);
      button.click();
    }


}
