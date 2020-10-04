import { DetailComponent } from './../ingenierie/detail/detail.component';
import { SanComponent } from './san/san.component';
import { IeaiComponent } from './ieai/ieai.component';
import { GpComponent } from './gp/gp.component';
import { CieComponent } from './cie/cie.component';
import { MastersearchComponent } from './mastersearch.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MastersearchComponent , children:[
      {
        path: 'cie' , component: CieComponent,
      },
      {
        path: 'gp' , component: GpComponent,
      },
      {
        path: 'ieai' , component: IeaiComponent,
      },
      {
        path: 'san' , component: SanComponent,
      },
      {
        path: 'detail' , component: DetailComponent,
      },
      {
        path: '' , component: CieComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersearchRoutingModule { }
