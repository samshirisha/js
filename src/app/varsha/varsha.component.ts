import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl ,Validators } from "@angular/forms";

@Component({
  selector: 'app-varsha',
  templateUrl: './varsha.component.html',
  styleUrls: ['./varsha.component.css']
})
export class VarshaComponent implements OnInit {
 
  submitted = false;
  userdet=new FormGroup({
    uname:new FormControl('',[Validators.required]),
    unum:new FormControl('',[Validators.required,Validators.minLength(10)]),
    icode:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required]),
    
  })

  constructor() { }

  ngOnInit() {

  }
  get f() { return this.userdet.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.userdet.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
