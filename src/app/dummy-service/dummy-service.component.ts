import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Data } from '../data.model ';

@Component({
  selector: 'app-dummy-service',
  templateUrl: './dummy-service.component.html',
  styleUrls: ['./dummy-service.component.css']
})
export class DummyServiceComponent implements OnInit {
  data$:Data[];

  constructor(private _dataservice:DataServiceService) { }

  ngOnInit() {
    return this._dataservice.getUsers()
    .subscribe(data=> this.data$=data);
  }

}
