import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { NavigationExtras } from "@angular/router";
import { ExcelService } from "src/app/excel.service";
import { Visitor } from '../visitoradd/visitoradd.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit {

  private visitorObj;
  model: Visitor = new Visitor();
  private visitorList: Visitor[];
  private columns: any[];
  msg: string = null;
  
  constructor(private dataService: DataServiceService, private router: Router, private excelService: ExcelService) {
    this.visitorList = [];
   }
    exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.visitorList, 'Visitor List');
  }

  updateVisitor(visitor) {
  console.log("list" + visitor)
  let date = formatDate(visitor.date, 'MM/dd/yyyy', 'en-US');
    let navigationExtras: NavigationExtras = {
      queryParams: {
           "srno": visitor.srno,
            // "date": moment.format(visitor.date,'mm/dd/yyyy'),
           "dateval": date,          
            "name": visitor.name,
            "contactname": visitor.contactname,
            "contactemployeeid":visitor.contactemployeeid,
            "badgeno": visitor.badgeno,
            "purpose": visitor.purpose,
            "intime": visitor.intime,
            "personalitemin": visitor.personalitemin,
            "outtime": visitor.outtime,
            "personalitemout": visitor.personalitemout,
            "remarks": visitor.remarks
      }
    };
    console.log("list1" + visitor)
    this.router.navigate(['/visitorupdate'], navigationExtras);
  }

   deleteVisitor(srno) {
    if (srno == null) {
      alert("Please enter a valid Badge No.")
    }
     else {
      this.dataService.deleteVisitor(srno)
        .subscribe(res => {
          //console.log('After delete' + JSON.stringify(res));
          alert("Visitor data deleted successfully!");
          this.router.navigate(['/', 'postlogin']);
        });
    }
  }

  ngOnInit() {
    this.visitorList = this.dataService.getVisitor();
    this.columns = this.dataService.getVisitorColumns();
  }

}
