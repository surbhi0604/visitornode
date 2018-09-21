import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { Users } from '../login/users.model';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title = 'first-app';
  users:Array<any>;
  public userid: string;
  public password: string;

 private userObj;
 
  model: Users = new Users();

msg: string = null;

  constructor(private dataService: DataServiceService,private router: Router ) { }

 authenticateUser()
{
      var autheticated = true;
      let userData = this.dataService.getLoginUser(this.model.userId);
      console.log(userData);
      if(this.model.password == null){
        alert('Please enter a valid Password');
      }
      
      if(autheticated){
        this.router.navigate(['/','postlogin']);
      }
}

  registerRoute(){
    this.router.navigate(['/','register']);
  }

  ngOnInit()
  {
 
  }
   
}





