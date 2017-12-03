import { SigninComponent } from './login/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';

const routes: Routes = [
 {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 },
 {
   path: 'home',
   component: SigninComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
