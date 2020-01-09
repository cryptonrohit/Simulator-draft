import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  proceedClick(){
    this.route.navigate(['connector']);
  }
}
