import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  isStartCollapsed:boolean = false;
  isStopCollapsed:boolean = false;
  stopChargingEnable:boolean;
  
  constructor() { }

  ngOnInit() {
  }

//   startcharging(){
//     this.stopChargingEnable = true;
//     //this.isStartCollapsed = true;
//     // this.isStopCollapsed = false;
// }

}
