import { AdminMemoiresComponent } from './admin/admin-memoires/admin-memoires.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sites', loadChildren: () => import
    ('./sites/sites.module').then(m => m.SitesModule)
  },

  {
    path: 'admin', loadChildren: () => import
         ('./admin/admin.module').then(m => m.AdminModule) },
  {
                                path: '', redirectTo: 'sites', pathMatch: 'full'},
                                { path: '**', component: NotFoundComponentComponent },
                                // {path: 'memoire' , component:AdminMemoiresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
