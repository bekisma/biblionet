import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddmemoireComponent } from './dashbord/addmemoire/addmemoire.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMemoiresComponent } from './admin-memoires/admin-memoires.component';
import { AdminBibliothequeComponent } from './admin-bibliotheque/admin-bibliotheque.component';
import { HttpClient } from'@angular/common/http';
import { IngenierieComponent } from './dashbord/ingenierie/ingenierie.component';
import { DoctoratComponent } from './dashbord/doctorat/doctorat.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashbordComponent,
    AdminNavComponent,
    AdminSidebarComponent,
    AddmemoireComponent,
    AdminFooterComponent,
    AdminMemoiresComponent,
    AdminBibliothequeComponent,

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
