import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  connectButtonColor: boolean=false;
  connectionValue:string = 'Connect';
  connectClickValue:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onClickConnect(){
    // this.connectClickValue = true;
    // this.connectionValue = 'Connected!..';
    // this.connectButtonColor= true;
    this.route.navigate(['charger']);
  }

}
