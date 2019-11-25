import { Component, OnInit } from '@angular/core';
import {DataService}from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
ss;
rr;
  constructor(private dat:DataService) { 
    this.ss=this.dat.user;
   this.rr=this.dat.toda;
    

  }
  

  ngOnInit() {
  }
 

}
