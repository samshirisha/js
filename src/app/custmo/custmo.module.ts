import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcoComponent } from './proco/proco.component';
import { RouterModule, Routes } from '@angular/router';
 const myapp:Routes=[
   {
     path:'',
     component:ProcoComponent
   }
 ]


@NgModule({
  declarations: [ProcoComponent],
  imports: [
    CommonModule,RouterModule.forChild(myapp)
  ]
})
export class CustmoModule { }
