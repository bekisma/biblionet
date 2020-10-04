import { ListUploadComponent } from './pages/list-upload/list-upload.component';
import { DetailsUploadComponent } from './pages/details-upload/details-upload.component';
import { EssaiComponent } from './pages/essai/essai.component';
import { ViewComponent } from './pages/view/view.component';
import { StudentsComponent } from './pages/students/students.component';
import { MemoiresComponent } from './pages/memoires/memoires.component';
import { ListParcoursComponent } from './pages/list-parcours/list-parcours.component';
import { HomeComponent } from './pages/home/home.component';
import { BibliothequeComponent } from './pages/bibliotheque/bibliotheque.component';
import { AffichageComponent } from './pages/affichage/affichage.component';
import { HeaderComponent } from './fixed/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SitesComponent,
    HeaderComponent,
    AffichageComponent,
    BibliothequeComponent,
    HomeComponent,
    ListParcoursComponent,
    MemoiresComponent,
    StudentsComponent,
    ViewComponent,
    HeaderComponent,
    EssaiComponent,
    DetailsUploadComponent,
    ListUploadComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule

  ]
})
export class SitesModule { }
