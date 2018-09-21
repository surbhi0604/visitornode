import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "src/app/data-service.service";
import { Router } from "@angular/router";
import { LoginUser } from "src/app/register-user/login-user.model";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

 model: LoginUser = new LoginUser();

 constructor(private dataService: DataServiceService,private router: Router ) { }

  registerUser() {
    let bodyObj = [
        {
            "username": this.model.userName,
            "employeeid": this.model.employeeId,
            "userid": this.model.userId,
            "password": this.model.password
        }

    ]
    if(this.model.userName == null){
      alert("Please enter a valid Username")
    }
       else if(this.model.employeeId == null){
        alert("Please enter a valid Employee id ")
      }
       else if(this.model.userId == null){
        alert("Please enter a valid UserId ")
      }
       else if(this.model.password == null){
        alert("Please enter a valid Password ")
      }
  
    else{
      
      this.dataService.registerUser(bodyObj);
      alert("You have successfully registered!!")
      this.router.navigate(['/','postlogin']);
    } 
}

  ngOnInit() {
  }

}
