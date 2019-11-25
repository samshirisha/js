import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';

import { HloComponent } from './hlo/hlo.component';
import { DisplayComponent } from './display/display.component';
import {DataService} from './data.service';

import { from } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import {RouterModule} from '@angular/router';
import { VarshaComponent } from './varsha/varsha.component';
import { BuyComponent } from './buy/buy.component';
import { SellService } from './sell.service';
import { Carr1Component } from './carr1/carr1.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

// import { CustmoModule } from "./custmo/custmo.module";




const myLinks=[
  { path: 'member', component: MemberComponent },
  { path: 'product', component: ProductComponent},
  {path: 'carr1/:id',component:Carr1Component},
  {path:'custmo',
  loadChildren:'./custmo/custmo.module#CustmoModule'
}
]


@NgModule({
  declarations: [
    AppComponent,
  
    HloComponent,
  
    DisplayComponent,
  
    
  
    ProductComponent,
  
    MemberComponent,
  
    VarshaComponent,
  
    BuyComponent,
  
    Carr1Component,
  
    ContactComponent,
  

  
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
  
    FormsModule,
    HttpClientModule,MatInputModule,
    RouterModule.forRoot(myLinks),
    MatFormFieldModule,BrowserAnimationsModule,ReactiveFormsModule
  
  ],
  providers: [DataService,SellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
