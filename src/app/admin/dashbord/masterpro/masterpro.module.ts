import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterproRoutingModule } from './masterpro-routing.module';
import { CgqComponent } from './cgq/cgq.component';
import { NaComponent } from './na/na.component';
import { MainGeftComponent } from './main-geft/main-geft.component';
import { SimeComponent } from './sime/sime.component';


@NgModule({
  declarations: [CgqComponent, NaComponent, MainGeftComponent, SimeComponent],
  imports: [
    CommonModule,
    MasterproRoutingModule
  ]
})
export class MasterproModule { }
