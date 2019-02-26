import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule}  from  "./material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { Emp1Component } from './employee/emp1/emp1.component';
import {Emp1Service} from './shared/emp1.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Emp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule  
  ],
  providers: [Emp1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
