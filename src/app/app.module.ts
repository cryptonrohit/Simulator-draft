import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ConnectComponent } from './connect/connect.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { StatusValuesComponent } from './status-values/status-values.component';
import { HttpClientModule } from '@angular/common/http'
import { DataServiceService } from './data-service.service';
import { DummyServiceComponent } from './dummy-service/dummy-service.component';
import { EmployeeService } from './employee.service';
import { DummyEmployeeComponent } from './dummy-employee/dummy-employee.component';
import { ChargerComponent } from './charger/charger.component';
import { ConnectorComponent } from './connector/connector.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChargerStatusValuesComponent } from './charger-status-values/charger-status-values.component';
import { DisconnectComponent } from './disconnect/disconnect.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AuthorizeComponent,
    StartComponent,
    StopComponent,
    LoginComponent,
    OverviewPageComponent,
    ConnectComponent,
    MainHeadingComponent,
    StatusValuesComponent,
    DummyServiceComponent,
    DummyEmployeeComponent,
    ChargerComponent,
    ConnectorComponent,
    TransactionComponent,
    ChargerStatusValuesComponent,
    DisconnectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'start', component: StartComponent},
      {path:'stop', component: StopComponent},
      {path:'connect', component: ConnectComponent},
      {path:'overview-page', component: OverviewPageComponent},
      {path:'charger', component: ChargerComponent},
      {path:'connector', component: ConnectorComponent},
      {path:'transaction', component: TransactionComponent},
      {path:'', component: LoginComponent}
    ])    
  ],
  providers: [DataServiceService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
