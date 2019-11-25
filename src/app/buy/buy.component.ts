import { Component, OnInit } from '@angular/core';
import { SellService } from "../sell.service";
import { User } from "../user";
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
data1:User[];
  constructor(private s:SellService) { }

  ngOnInit() {
    this.s.getUsers().subscribe(data=>{
      this.data1=data;
      console.log(this.data1);
    })
  }

}
