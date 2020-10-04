import { Injectable } from '@angular/core';
import {Ouvrage} from '../models/Ouvrage';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OuvrageService {
  ouvrageCollection: AngularFirestoreCollection<Ouvrage>
  ouvrages: Observable<Ouvrage[]>

constructor(public afs: AngularFirestore) {
  this.ouvrages = this.afs.collection('ouvrage').valueChanges() ;
 }

    getOuvrages(){
    return this.ouvrages
    }
}
