import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  stopChargingEnable:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  disconnect(){
    this.stopChargingEnable = false;
  }

}
