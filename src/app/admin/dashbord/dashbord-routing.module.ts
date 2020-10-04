import { NotFoundComponentComponent } from './../../not-found-component/not-found-component.component';
import { DashbordComponent } from './dashbord.component';
import { IngenierieComponent } from './ingenierie/ingenierie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',  component: DashbordComponent , children: [
      {
        path: 'ingenierie' , loadChildren: () => import ('./ingenierie/ingenierie.module').then(m => m.IngenierieModule),
      },

      {
        path: 'doctorat' , loadChildren: () => import ('./doctorat/doctorat.module').then(m => m.DoctoratModule),
      },
      {
        path: 'masterpro' , loadChildren: () => import ('./masterpro/masterpro.module').then(m => m.MasterproModule),
      },
      {
        path: 'mastersearch' , loadChildren: () => import ('./mastersearch/mastersearch.module').then(m => m.MastersearchModule),
      },
      {
        path: '' , redirectTo: 'ingenierie' , pathMatch: 'full',
      },
      {
        path: '**' , component: NotFoundComponentComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
