import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  isStartCollapsed:boolean = false;
  isStopCollapsed:boolean = false;
  

  constructor(private route:Router) { }

  ngOnInit() {
  }
  // stopcharging(){
  //     this.route.navigate(['stop']);
  //     this.isStopCollapsed = true;
  //     this.isStartCollapsed = false;
  // }

}
