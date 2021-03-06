import { Component, OnInit } from '@angular/core';
import { Employee } from '../employeeadd/employeeadd.model';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { NavigationExtras } from "@angular/router";
import { ExcelService } from "src/app/excel.service";


@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',

  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  private employeeObj;
  model: Employee = new Employee();
  private employeeList: Employee[];
  private columns: any[];
  msg: string = null;

  constructor(private dataService: DataServiceService, private router: Router, private excelService: ExcelService) {
    this.employeeList = [];
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.employeeList, 'Employee List');
  }

  updateEmployee(employee) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "username": employee.username,
        "usersso": employee.usersso,
        "employeeid": employee.employeeid,
        "location": employee.location,
        "backgroundflag": employee.backgroundflag
      }
    };
   
    this.router.navigate(['/employeeupdate'], navigationExtras);
  }


  deleteEmployee(employeeid) {
    if (employeeid == null) {
      alert("Please enter a valid Employee Id")
    }
     else {
      this.dataService.deleteEmployee(employeeid)
        .subscribe(res => {
          //console.log('After delete' + JSON.stringify(res));
          alert("Employee data deleted successfully!");
          this.router.navigate(['/', 'postlogin']);
        });
    }
  }

  ngOnInit() {

    this.employeeList = this.dataService.getEmployee();
    this.columns = this.dataService.getEmpColumns();
  }

}
