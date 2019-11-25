import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SellService } from '../sell.service';
@Component({
  selector: 'app-carr1',
  templateUrl: './carr1.component.html',
  styleUrls: ['./carr1.component.css']
})
export class Carr1Component implements OnInit {
aa:any;
dd;
  constructor(private f:ActivatedRoute,private s:SellService) { 
    this.aa=this.f.snapshot.params.id
     console.log(this.aa)
  }

  ngOnInit() {
this.s.getUserById(this.aa).subscribe(res=>{
  this.dd=res

})
  }
  add(){
    
  }

}
