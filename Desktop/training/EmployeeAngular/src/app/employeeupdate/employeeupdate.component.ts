import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Employee } from '../employeeadd/employeeadd.model';
 import { Router } from '@angular/router';
 import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  private employeeObj;
  model: Employee = new Employee();
  private userName: string;
private userSso:number;
private employeeId:number;
private location:string;
private backgroundFlag:string;
  constructor(private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
            this.userName = params["username"];
           this.userSso = params["usersso"];
           this.employeeId = params["employeeid"];
           this.location = params["location"];
           this.backgroundFlag = params["backgroundflag"];
           
        });
        console.log(this.userName)
   }
  

   updateEmployee(employee) {
     console.log(employee);
    let bodyObj = [
        {
            
            "username": this.userName,
            "usersso": this.userSso,
           "employeeid": this.employeeId,
            "location": this.location,
            "backgroundflag": this.backgroundFlag,
            
        }
    ]
   
  console.log(employee)
    if(this.userName == null){
      alert("Please enter a valid Username")}
     else if(this.userSso == null){
        alert("Please enter a valid User SSO ")
      }
       else if(this.employeeId == null){
        alert("Please enter a valid Employee id ")
      }
       else if(this.location == null){
        alert("Please enter a valid location ")
      }
       else if(this.backgroundFlag == null){
        alert("Please enter a valid background flag ")
      }
    
    else{
 
    this.dataService.updateEmployee(bodyObj);
    alert("Employee data updated successfully!");
    this.router.navigate(['/','employeelist']);
    }
}


  ngOnInit() {
    this.employeeObj = this.dataService.getEmployee();
  }

}
