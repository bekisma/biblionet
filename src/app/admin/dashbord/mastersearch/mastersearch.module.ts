import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersearchRoutingModule } from './mastersearch-routing.module';
import { MastersearchComponent } from './mastersearch.component';
import { CieComponent } from './cie/cie.component';
import { IeaiComponent } from './ieai/ieai.component';
import { GpComponent } from './gp/gp.component';
import { SanComponent } from './san/san.component';


@NgModule({
  declarations: [CieComponent, IeaiComponent, GpComponent, SanComponent],
  imports: [
    CommonModule,
    MastersearchRoutingModule
  ]
})
export class MastersearchModule { }
