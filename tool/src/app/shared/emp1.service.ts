import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class Emp1Service {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key:  new FormControl(null),
    fullname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  })
}
