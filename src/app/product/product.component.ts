import { Component, OnInit } from '@angular/core';
import { SellService } from '../sell.service';
import { User } from "../user";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data1:User[];

  constructor(private s:SellService) { }

  ngOnInit() {
    this.s.getUsers().subscribe(data=>{
      this.data1=data;
      console.log(this.data1);
    })
  }

}
