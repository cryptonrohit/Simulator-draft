import { Component, OnInit } from '@angular/core';
import { StatusValues } from '../statusValue.model';

@Component({
  selector: 'app-status-values',
  templateUrl: './status-values.component.html',
  styleUrls: ['./status-values.component.css']
})
export class StatusValuesComponent implements OnInit {

  //showStatusOptions:boolean = false;
  applyStatusValueToggle:boolean=false;
  //expandInfoValue:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  statusValues: StatusValues[]=[
    {id:1, name:'Connector- Available'},
    {id:2, name:'Connector- Preparing'},
    {id:3, name:'Connector- Charging'},
    {id:4, name:'Connector- Faulted'},
    {id:5, name:'Connector- Unavailable'},
    {id:6, name:'Connector- Reserved'}
  ] 

  
  value = this.statusValues[0];

  onClickApplyStatusValue(){
    this.applyStatusValueToggle = !this.applyStatusValueToggle;
  }

  // expandInfo(){
  //   this.expandInfoValue = !this.expandInfoValue;
  // }

}
