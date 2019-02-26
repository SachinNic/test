import { Component, OnInit } from '@angular/core';
import {Emp1Service} from '../../shared/emp1.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {

  constructor(private service: Emp1Service) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  ngOnInit() {
  }

}
