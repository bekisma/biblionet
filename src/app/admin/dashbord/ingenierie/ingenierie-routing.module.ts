import { DetailComponent } from './detail/detail.component';
import { NewMemoireComponent } from './new-memoire/new-memoire.component';
import { CigeComponent } from './cige/cige.component';
import { MipComponent } from './mip/mip.component';
import { IaaComponent } from './iaa/iaa.component';
import { IngenierieComponent } from './ingenierie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: IngenierieComponent , children:[
      {
        path: 'iaa' , component: IaaComponent,
      },
      {
        path: 'mip' , component: MipComponent,
      },
      {
        path: 'cige' , component: CigeComponent,
      },
      {
        path: 'newmemoire' , component: NewMemoireComponent,
      },
      {
        path: 'detail' , component: DetailComponent,
      },
      {
        path: '' , component: IaaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngenierieRoutingModule { }
