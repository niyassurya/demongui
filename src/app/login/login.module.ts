import { CustomerModule } from './../customer/customer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CustomerModule
  ],
  exports:[
    SigninComponent
  ],
  declarations: [SigninComponent, SignupComponent, ResetpasswordComponent]
})
export class LoginModule { }
