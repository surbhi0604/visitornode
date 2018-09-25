import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitor } from '../visitoradd/visitoradd.model';

@Component({
  selector: 'visitoradd',
  templateUrl: './visitoradd.component.html',
  styleUrls: ['./visitoradd.component.css']
})
export class VisitoraddComponent implements OnInit {
private visitorObj;

  model: Visitor = new Visitor();
  constructor(private dataService: DataServiceService, private formBuilder: FormBuilder, private router: Router) { }
 
  addVisitor() {

    let bodyObj = [
      {
        // "SrNo": this.model.SrNo,
            "date": this.model.date,
            "name": this.model.username,
            "contactName": this.model.contactName,
            "contactEmployeeId":this.model.contactEmployeeId,
            "badgeNo": this.model.badgeNo,
            "purpose": this.model.purpose,
            "inTime": this.model.inTime,
            "personalItemIn": this.model.personalItemIn,
            "outTime": this.model.outTime,
            "personalItemOut": this.model.personalItemOut,
            "remarks": this.model.remarks
      }

    ]
    // if (this.model.SrNo == null) {
    //   alert("Please enter a valid srNo")
    // }
    if (this.model.date == null) {
      alert("Please enter a valid date ")
    }
    else if (this.model.username == null) {
      alert("Please enter a valid name ")
    }
    else if (this.model.contactName == null) {
      alert("Please enter a valid Contact Name ")
    }
    else if (this.model.contactEmployeeId == null) {
      alert("Please enter a valid Contact EmployeeId ")
    }
    else if (this.model.badgeNo == null) {
      alert("Please enter a valid BadgeNo ")
    }
    else if (this.model.purpose == null) {
      alert("Please enter a valid Purposr ")
    }
    else if (this.model.inTime == null) {
      alert("Please enter a valid In time ")
    }
      else if (this.model.outTime == null) {
      alert("Please enter a valid Out Time ")
    }
      else {
      this.dataService.addVisitor(bodyObj)
      .subscribe(res => {
          //console.log('After delete' + JSON.stringify(res));
          alert("Visitor data added successfully!");
          this.router.navigate(['/', 'visitorlist']);
        });
    }
  }


  ngOnInit() {

  }

}

