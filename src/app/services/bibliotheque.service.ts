import { Injectable } from '@angular/core';
import {Ouvrage} from '../models/Ouvrage';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {
    ouvrageCollection: AngularFirestoreCollection<Ouvrage>
    ouvrages: Observable<Ouvrage[]>

  constructor(public afs: AngularFirestore) {
    this.ouvrages = this.afs.collection('ouvrages').valueChanges() ;
   }

getOuvrages(){
  return this.ouvrages
}

}


