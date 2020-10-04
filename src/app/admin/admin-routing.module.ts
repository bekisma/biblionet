import { AdminBibliothequeComponent } from './admin-bibliotheque/admin-bibliotheque.component';
import { AdminMemoiresComponent } from './admin-memoires/admin-memoires.component';
import { AddmemoireComponent } from './dashbord/addmemoire/addmemoire.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , component: AdminComponent , children:[
      {path: '' , component: DashbordComponent },
      {path: 'addmemoire', component: AddmemoireComponent},
      {path: 'adminMemoire', component: AdminMemoiresComponent},
      {path: 'adminBibliotheque', component: AdminBibliothequeComponent},
      {path: 'dashbord' , loadChildren: () => import ('./dashbord/dashbord.module').then(m => m.DashbordModule) },


    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
