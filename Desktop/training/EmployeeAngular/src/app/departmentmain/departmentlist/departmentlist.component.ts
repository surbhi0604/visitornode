import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Department } from '../../departmentmain/departmentadd/departmentadd.model';
import { Router } from '@angular/router';
import { NavigationExtras } from "@angular/router";


@Component({
  selector: 'departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  private departmentList: Department[];
  private columns: any[];

  constructor(private dataService: DataServiceService, private router: Router) { }

  updateDepartment(department) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deptId": department.deptId,
        "deptName": department.deptName,
        "deptManager": department.deptManager,
      }
    };
    this.router.navigate(['/departmentupdate'], navigationExtras);
  }

  deleteDepartment(deptId) {
    if (deptId == null) {
      alert("Please enter a valid Department Id")
    }
    else {
      this.dataService.deleteDepartment(deptId);
      alert("Department data deleted successfully!");
      this.router.navigate(['/', 'departmentlist']);
    }
  }

  ngOnInit() {
    this.departmentList = this.dataService.getDepartment();
    this.columns = this.dataService.getDeptColumns();

  }

}
