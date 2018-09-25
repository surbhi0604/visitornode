import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Visitor } from '../visitoradd/visitoradd.model';
 import { Router } from '@angular/router';
 import { ActivatedRoute } from "@angular/router";
import { formatDate } from '@angular/common';

@Component({
  selector: 'visitorupdate',
  templateUrl: './visitorupdate.component.html',
  styleUrls: ['./visitorupdate.component.css']
})
export class VisitorupdateComponent implements OnInit {

private visitorObj;
  model: Visitor = new Visitor();
  // private SrNo: number;
private dateval:Date;
private username:string;
private contactName:string;
private contactEmployeeId:string;
private badgeNo: string;
private purpose:string;
private inTime:string;
private personalItemIn:string;
private outTime:string;
private personalItemOut: string;
private remarks:string;

  constructor(private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
          // this.SrNo = params["srno"];
           this.dateval = params["dateval"];
           this.username = params["name"];
           this.contactName = params["contactname"];
           this.contactEmployeeId = params["contactemployeeid"];
           this.badgeNo = params["badgeno"];
           this.purpose = params["purpose"];
           this.inTime = params["intime"];
           this.personalItemIn = params["personalitemin"];
           this.outTime = params["outtime"];
           this.personalItemOut = params["personalitemout"];
           this.remarks = params["remarks"];
           
           
        });
        console.log("date" +this.dateval)
   }

   updateVisitor(visitor) {
    //  console.log("update" + visitor)
     let date = formatDate('2018-09-19', 'yyyy-mm-dd', 'en-US');
    let bodyObj = [
        {
            // "srno": this.SrNo,
            "date": this.dateval,
            "name": this.username,
            "contactname": this.contactName,
            "contactemployeeid":this.contactEmployeeId,
            "badgeno": this.badgeNo,
            "purpose": this.purpose,
            "intime": this.inTime,
            "personalitemin": this.personalItemIn,
            "outtime": this.outTime,
            "personalitemout": this.personalItemOut,
            "remarks": this.remarks
        }
    ]
   
  console.log(this.dateval)
    // if (this.SrNo == null) {
    //   alert("Please enter a valid srNo")
    // }
    if (this.dateval == null) {
      alert("Please enter a valid date ")
    }
    else if (this.username == null) {
      alert("Please enter a valid name ")
    }
    else if (this.contactName == null) {
      alert("Please enter a valid Contact Name ")
    }
    else if (this.contactEmployeeId == null) {
      alert("Please enter a valid Contact EmployeeId ")
    }
    else if (this.badgeNo == null) {
      alert("Please enter a valid BadgeNo ")
    }
    else if (this.purpose == null) {
      alert("Please enter a valid Purposr ")
    }
    else if (this.inTime == null) {
      alert("Please enter a valid In time ")
    }
      else if (this.outTime == null) {
      alert("Please enter a valid Out Time ")
    }
    
    else {
      this.dataService.updateVisitor(bodyObj)
     
        .subscribe(res => {
          // console.log('After update' + JSON.stringify(res));
          alert("Visitor data updated successfully!")
          this.router.navigate(['/', 'visitorlist']);
        });
      console.log(bodyObj)
      //this.dataService.updateEmployee(bodyObj);
    }
}

  ngOnInit() {
    this.visitorObj = this.dataService.getVisitor();
    console.log(this.visitorObj)
  }

}
