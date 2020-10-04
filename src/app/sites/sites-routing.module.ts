import { SitesComponent } from './sites.component';
import { AffichageComponent } from './pages/affichage/affichage.component';
import { ListParcoursComponent } from './pages/list-parcours/list-parcours.component';
import { ViewComponent } from './pages/view/view.component';
import { StudentsComponent } from './pages/students/students.component';
import { EssaiComponent } from './pages/essai/essai.component';
import { MemoiresComponent } from './pages/memoires/memoires.component';
import { BibliothequeComponent } from './pages/bibliotheque/bibliotheque.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',                  component: SitesComponent ,children:[
    { path: '',                  component: HomeComponent},
    { path: 'home',              component: HomeComponent},
    { path: 'bibliotheque',      component: BibliothequeComponent},
    { path: 'memoires',          component: MemoiresComponent},
    { path: 'students',          component: StudentsComponent},
    { path: 'essai',             component: EssaiComponent},
    { path: 'view',              component: ViewComponent},
    { path: 'listparcours',      component: ListParcoursComponent},
    { path: 'affichage/:id',     component: AffichageComponent},

  ]},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
