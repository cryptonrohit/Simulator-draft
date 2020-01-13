import { Component, OnInit } from '@angular/core';
// import { user_ids } from './authorize.model';
import {  } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  id:string;
  // userid:user_ids;
  isUserid_authorized:boolean = false;

  constructor() {
      
   }

  ngOnInit() {
  }
  tagids = ['abc','rfg','rrr']

  checkId(){
    this.tagids.forEach(element => {
      if(element === this.id){
        return this.isUserid_authorized=true;
      }
        this.isUserid_authorized=false;
    });
    
    
  }


}
