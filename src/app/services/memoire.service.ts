// import { AngularFireStorage } from '@angular/fire/storage';
// import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection
  , AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Memoire } from './../models/Memoire';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Parcours } from '../models/Parcours';
import { promise } from 'protractor';
import { resolve } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class MemoireService {

  memoireCollection: AngularFirestoreCollection<Memoire>
  memoires: Observable<Memoire[]>
  parcours: Observable<[Parcours]>


    constructor(
                public  afs: AngularFirestore,
                private router:Router)  {
    // this.memoires = this.afs.collection('memoires').valueChanges();
    //  this.memoires = this.afs.collection('memoires').snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Memoire;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
    }

    public filepath: any;
    public uploadPercent: Observable<number>;
    public downloadUrl: Observable<string>;
    public percentage: any;
    // public percentageChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.percentage);

   public setPercentage (percentage: any): void{
     this.percentage = percentage;
    //  this.percentageChanges.next(percentage);

   }

  getMemoires(){
    return this.memoires;
  }
  get(memoireId){
    return this.afs.collection('memoires' + memoireId);
  }

  getProperty(id: any){
    return this.getMemoires().pipe(
      map(propertiesArray =>{
        return propertiesArray.find( p=> p.id === id );
      } )
    )
  }

  // getProperty(id: number){
  //   return this.getMemoires().pipe(
  //     map(propertiesArray => {
  //       return propertiesArray.find(p => p.Id ===id);
  //     })
  //   );
  // }

  public getMemories(){
    let memories = this.afs.collection("memoires").snapshotChanges();
    return memories.pipe(
      map(memories =>{
        let _memory =[];
        memories.forEach(p =>{
          _memory.push(p);
        });
        // console.log(_memory);
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
          // console.log(memory);
          return memory;
        })
      ).subscribe((memory) => {
        resolve();
        currentMemory = memory
        // console.log(currentMemory);
      });
    }).catch(err => {
      console.log(err);
    });

    return currentMemory;

  }

  public async getAllParcours(){
    let parcours: any[] = [];

    await new Promise((resolve) => {
      this.afs.collection("parcours").snapshotChanges().pipe(
        take(1),
        map(changes => {
          let _parcours = [];
          changes.forEach(t => {
            _parcours.push({id: t.payload.doc.id})
          })
          return _parcours ;
        })
      ).subscribe(_parcours => {
        resolve();
        return parcours =_parcours;
      } );
    }).then(() => {
        console.log("reussi");
    }).catch(err => {
        console.log(err);
    });
    return parcours;
  }

  public async getAllMention(){

  }

  public async getCycles(cycles: any){
    let currentCycles = cycles;
    let allCycles;

    await new Promise((resolve) => {
      this.afs.collection("cycle", ref => ref.orderBy("name")).snapshotChanges().pipe(
        take(1),
        map(changes => {
          let _cycles = [];
          changes.forEach(t => {
            const data = t.payload.doc.data() as Memoire;
            const id = t.payload.doc.id;
            if(currentCycles.includes(t.payload.doc.id)){
              _cycles.push({id , data , status:true});
            }else {
              _cycles.push({id , data , status:false});
            }
          });
          console.log(_cycles);
          return _cycles
        })
      ).subscribe(_cycles => {
        resolve();
        return allCycles = _cycles;
      });
    });
    return allCycles;
  }

  // public async uploadPdf(files: any[]){
  //   const pdf = files[0];
  //   this.filepath = Date.now() + "-" + files[0]["name"];

  //   const fileRef = this.storage.ref(this.filepath);
  //   const task = this.storage.upload(this.filepath, pdf);

  //   this.uploadPercent = task.percentageChanges();
  //   this.uploadPercent.pipe(take(1)).subscribe(percent =>{
  //     console.log("percent:" , percent);
  //     this.setPercentage(Math.trunc(percent))
  //   });

  //   await task.snapshotChanges().toPromise();
  //   this.downloadUrl = await fileRef.getDownloadURL().toPromise();

  // }

  public async addMemory(){

  }


  getPdf(): string{
    return './../../../assets/pdf.pdf';
  }

  }
