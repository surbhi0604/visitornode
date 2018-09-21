import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Department } from '../../departmentmain/departmentadd/departmentadd.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'departmentupdate',
  templateUrl: './departmentupdate.component.html',
  styleUrls: ['./departmentupdate.component.css']
})
export class DepartmentupdateComponent implements OnInit {
  private departmentObj;
  model: Department = new Department();
  private deptId: number;
  private deptName: string;
  private deptManager: string;
  constructor(private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.deptId = params["deptId"];
      this.deptName = params["deptName"];
      this.deptManager = params["deptManager"];

    });
    console.log(this.deptManager)
  }

  updateDepartment(department) {
    let bodyObj = [
      {
        "deptId": this.deptId,
        "deptName": this.deptName,
        "deptManager": this.deptManager,

      }
    ]

    if (this.deptId == null) {
      alert("Please enter a valid Department id")
    }
    else if (this.deptName == null) {
      alert("Please enter a valid Department name ")
    }
    else if (this.deptManager == null) {
      alert("Please enter a valid Department Manager ")
    }
    else {
      this.dataService.updateDepartment(bodyObj);
      alert("Department data updated successfully!");
      this.router.navigate(['/', 'departmentlist']);
    }
  }

  ngOnInit() {
  }

}
