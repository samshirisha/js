import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hlo',
  templateUrl: './hlo.component.html',
  styleUrls: ['./hlo.component.css']
})
export class HloComponent implements OnInit {
form;
  constructor() { }
  // model: any = {};

   onSubmit() {
     alert('SUCCESS')
   }
  ngOnInit() {
  }

}
