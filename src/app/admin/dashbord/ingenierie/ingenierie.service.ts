import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, map,take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { MemoireAdmin } from './models/MemoireAdmin';

@Injectable({
  providedIn: 'root'
})
export class IngenierieService {

  constructor(
    private afs : AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router)
    { }

    public filepath : any;
    public uploadPercent: Observable<number>;
    public downloadURL: Observable<string>;
    public percentage: any = null;
    public percentageChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.percentage);

    public setPercentage(percentage: any): void{
      this.percentage = percentage;
      this.percentageChanges.next(percentage);

    }





  ajoutMemoire(memoryData: FormData , file: any[]){
    console.log(file,memoryData);
    const pdf = file[0];
    this.filepath = Date.now() + "-" + file[0]["name"];

    const fileRef = this.storage.ref(this.filepath);
    const task = this.storage.upload(this.filepath, pdf);
    task.snapshotChanges().pipe(

      finalize(() => {
        console.log("File is being processed , you will be redireected soon... ");
        fileRef.getDownloadURL().subscribe(urls => {
          this.downloadURL = urls;

          let newMemory = {
            nom: memoryData ["nom"],
            prenom: memoryData ["prenom"],
            matricule: memoryData ["matricule"],
            theme: memoryData ["theme"],
            encadreur: memoryData ["matricule"],
            entreprise: memoryData ["entreprise"],
            annee: memoryData ["annee"],
            parcours:memoryData["parcours"],
            cycle:memoryData["cycle"],
            isValide: true,
            url: this.downloadURL,
            fileref: this.filepath
          }

          this.afs.collection("memoires").add(newMemory).then(m => {
            console.log(m);
            this.router.navigate(['/']);
          }).catch(err => {
            console.log("error: ", err);
          });


        })
      })


    ).subscribe()
  }
  public async getCycle(){
    let cycle : any;
    let id: any;

    await new Promise((resolve) => {
      this.afs.collection("cycles").snapshotChanges().pipe(
        take(1),
        map(changes => {
          let _cycle = [];
          changes.forEach(t => {
            const data = t.payload.doc.data() as MemoireAdmin;
             id = t.payload.doc.id as MemoireAdmin;
            _cycle.push({id , ...data})
          })
          return _cycle;
        })
      ).subscribe(_cycle => {
        resolve();
        return cycle =_cycle;
      });
    }).then(() => {
      console.log("Hokkkkkkkkkkkkkkki");
      // this.getParcours(id)
    }).catch(err => {
      console.log(err)
    })

      return cycle;
  }

  public async getParcours(id:string){
    let parcours : any;

    await new Promise((resolve) => {
      this.afs.collection("cycles").doc(id).collection("parcours").snapshotChanges().pipe(
        take(1),
        map(changes => {
          let _cycle = [];
          changes.forEach(t => {
            const data = t.payload.doc.data() as MemoireAdmin;
            const id = t.payload.doc.id as MemoireAdmin;
            _cycle.push({id , ...data})
          })
          return _cycle;
        })
      ).subscribe(_cycle => {
        resolve();
        return parcours =_cycle;
      });
    }).then(() => {
      console.log("Hokkkkkkkkkkkkkkki");
    }).catch(err => {
      console.log(err)
    })

      return parcours;
  }

  public getCycl(){
    let memories = this.afs.collection('cycles', ref => ref.where('name' , '==' , 'INGENIERIE')).snapshotChanges();
    return memories.pipe(
      map(memories =>{
        let _memory = [];
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

}
