import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ViewallComponent } from './viewall/viewall.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports:[
    AddComponent, EditComponent, ViewComponent, ViewallComponent
  ],
  declarations: [AddComponent, EditComponent, ViewComponent, ViewallComponent]
})
export class CustomerModule { }
