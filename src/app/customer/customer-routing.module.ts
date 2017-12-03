import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';

const routes: Routes = [
  {
    path: 'customer',
    component: ViewallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
