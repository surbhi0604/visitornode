import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {


  private employeeObj;
  model: Employee = new Employee();

  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder, private router: Router) {

  }

  deleteEmployee() {
    if (this.model.employeeID == null) {
      alert("Please enter a valid Employee Id")
    }
    else {

      this.dataService.deleteEmployee(this.model.employeeID);

      alert("Employee data deleted successfully!");
      this.router.navigate(['/', 'employeelist']);

    }
  }

  ngOnInit() {

  }

}
