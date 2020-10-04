import { DetailComponent } from './../ingenierie/detail/detail.component';
import { SimeComponent } from './sime/sime.component';
import { NaComponent } from './na/na.component';
import { MainGeftComponent } from './main-geft/main-geft.component';
import { CgqComponent } from './cgq/cgq.component';
import { MasterproComponent } from './masterpro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MasterproComponent , children:[
      {
        path: 'cgq' , component: CgqComponent,
      },
      {
        path: 'main-geft' , component: MainGeftComponent,
      },
      {
        path: 'na' , component: NaComponent,
      },
      {
        path: 'sime' , component: SimeComponent,
      },
      {
        path: 'detail' , component: DetailComponent,
      },
      {
        path: '' , component: CgqComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterproRoutingModule { }
