import { MastersearchComponent } from './mastersearch/mastersearch.component';
import { DoctoratComponent } from './doctorat/doctorat.component';
import { IngenierieComponent } from './ingenierie/ingenierie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { MasterproComponent } from './masterpro/masterpro.component';



@NgModule({
  declarations: [
    IngenierieComponent,
    DoctoratComponent,
    MasterproComponent,
    MastersearchComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
