import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngenierieRoutingModule } from './ingenierie-routing.module';
import { IaaComponent } from './iaa/iaa.component';
import { MipComponent } from './mip/mip.component';
import { CigeComponent } from './cige/cige.component';
import { NewMemoireComponent } from './new-memoire/new-memoire.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [IaaComponent, MipComponent, CigeComponent, NewMemoireComponent, DetailComponent],
  imports: [
    CommonModule,
    IngenierieRoutingModule,
    ReactiveFormsModule,
    PdfViewerModule

  ]
})
export class IngenierieModule { }
