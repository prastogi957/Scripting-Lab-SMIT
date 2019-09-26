import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  theEmployeeList=[
    {
      id:1,name:"Parth",dept:"Developer"
    },
    {
      id:2,name:"Krishna",dept:"SDET"
    },
    {
      id:3,name:"Puru",dept:"CEO"
    }

  ]

}
