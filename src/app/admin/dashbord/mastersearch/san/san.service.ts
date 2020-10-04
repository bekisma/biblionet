import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Memoire } from './../../../../models/Memoire';
import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SanService {

 // memoireCollection: AngularFirestoreCollection<Memoire>
 memoires: Observable<Memoire[]>
 constructor(public  afs: AngularFirestore) {
   // this.memoires = this.afs.collection('memoires').valueChanges();
    this.memoires = this.afs.collection('memoires').snapshotChanges().map(changes => {
     return changes.map(a => {
       const data = a.payload.doc.data() as Memoire;
       data.id = a.payload.doc.id;
       return data;
     });
   });
  }


 public getMemories(){
   let memories = this.afs.collection('memoires', ref => ref.where('parcours' , '==', 'SAN')).snapshotChanges();
   return memories.pipe(
     map(memories =>{
       let _memory =[];
       memories.forEach(p =>{
         _memory.push(p);
       });
       console.log(_memory);
       return _memory;
     })
   )
 }

 public async getMemory(docId: string){
   let currentMemory: any;

   await new Promise((resolve)=> {
     this.afs.collection("memoires").doc(docId).valueChanges().pipe(
       take(1),
       map(memory => {
         console.log(memory);
         return memory;
       })
     ).subscribe((memory) => {
       resolve();
       currentMemory = memory
       console.log(currentMemory);
     });
   }).catch(err => {
     console.log(err);
   });

   return currentMemory;

  }
}
