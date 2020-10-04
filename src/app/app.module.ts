import { HeaderComponent } from './sites/fixed/header/header.component';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AdminAuthGuardService } from './admin/admin-auth-guard.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sites/fixed/footer/footer.component';

// Angular material

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireDatabaseModule } from '@angular/fire/database';


// ng pdf
import { PdfViewerModule } from 'ng2-pdf-viewer';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

// Import NgxAuthFirebaseUIModule



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminHomeComponent,
    NotFoundComponentComponent,
  ],
  imports: [

    // angular Material

    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,


    ReactiveFormsModule,
    PdfViewerModule,

    BrowserAnimationsModule,


  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://biblionet-29bad.appspot.com' },
     AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
