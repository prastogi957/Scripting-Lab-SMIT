import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

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
