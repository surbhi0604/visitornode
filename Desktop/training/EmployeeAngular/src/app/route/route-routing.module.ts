import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeaddComponent } from '../employeeadd/employeeadd.component';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { EmployeeupdateComponent } from '../employeeupdate/employeeupdate.component';
import { DepartmentmainComponent } from '../departmentmain/departmentmain.component';
import { DepartmentaddComponent } from '../departmentmain/departmentadd/departmentadd.component';
import { DepartmentdeleteComponent } from '../departmentmain/departmentdelete/departmentdelete.component';
import { DepartmentlistComponent } from '../departmentmain/departmentlist/departmentlist.component';
import { DepartmentupdateComponent } from '../departmentmain/departmentupdate/departmentupdate.component';
import { EmployeemainComponent } from '../departmentmain/employeemain/employeemain.component';
import { AppComponent } from '../app.component';
import { PostloginComponent } from '../postlogin/postlogin.component';
import { LoginComponent } from '../login/login.component';
import { RegisterUserComponent } from "src/app/register-user/register-user.component";


const routes: Routes = [

  {
    path: 'employeeadd',
    component: EmployeeaddComponent
  },

  {
    path: 'employeedelete',
    component: EmployeeDeleteComponent
  },

  {
      path:'employeelist',
      component: EmployeelistComponent

  },

  {
    path:'employeeupdate',
    component: EmployeeupdateComponent
  },

  
  {
    path: 'employeemain',
    component: EmployeemainComponent

  },

  {
    path: 'departmentmain',
    component: DepartmentmainComponent

  },
  {
    path: 'departmentadd',
   component: DepartmentaddComponent
  },

  {
    path: 'departmentdelete',
   component: DepartmentdeleteComponent
  },

  {
    path: 'departmentlist',
   component: DepartmentlistComponent
  },

  {
    path: 'departmentupdate',
   component: DepartmentupdateComponent
  },

  {
    path: 'postlogin',
    component: PostloginComponent
  },
{
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: '',
    
    component: LoginComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
