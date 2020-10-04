import { Cycle } from './../models/MemoireStudent';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { finalize, map,take } from 'rxjs/operators';
import { MemoireStudent } from '../models/MemoireStudent';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class StudentService {




  constructor(
    private afs : AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router
  ) { }

    public filepath : any;
    public uploadPercent: Observable<number>;
    public downloadURL: Observable<string>;
    public percentage: any = null;
    public percentageChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.percentage);

    public setPercentage(percentage: any): void{
      this.percentage = percentage;
      this.percentageChanges.next(percentage);

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
                const data = t.payload.doc.data() as MemoireStudent;
                 id = t.payload.doc.id as MemoireStudent;
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
                const data = t.payload.doc.data() as MemoireStudent;
                const id = t.payload.doc.id as MemoireStudent;
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


      public async uploadPdf(files: any[]){
        const pdf = files[0];
        this.filepath = Date.now() + "-" + files[0]["name"];

        const fileRef = this.storage.ref(this.filepath);
        const task = this.storage.upload(this.filepath, pdf);

        this.uploadPercent = task.percentageChanges();
        this.uploadPercent.subscribe(percent => {
          console.log("pourcentage: ", percent);
          this.setPercentage(Math.trunc(percent));
        });

        await task.snapshotChanges().toPromise;
        this.downloadURL = await fileRef.getDownloadURL().toPromise();

      }

      public async addMemory(postObj: MemoireStudent , files: any[]){

        await this.uploadPdf(files);

        let newMemory = {
          nom: postObj['nom'],
          prenom: postObj['prenom'],
          matricule: postObj['matricule'],
          cycle : postObj["cycle"],
          parcours: postObj["parcours"],
          entreprise: postObj["entreprise"],
          encadreur: postObj["endadreur"],
          theme: postObj["theme"],
          annee: postObj["annee"],
          url: this.downloadURL,
          fileref: this.filepath
        };

       this.afs.collection('memoires').add(newMemory);

        this.setPercentage(null);
        this.router.navigate(["/"]);

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
                isValide: false,
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

      addItem(item: MemoireStudent){
        this.afs.collection("memoires").add(item)
      }

      // public async getCycle(){
      //   let cycle : any;

      //   await new Promise((resolve) => {
      //     this.afs.collection("cycle").snapshotChanges().pipe(
      //       take(1),
      //       map(changes =>  changes.map(a => {
      //         const data = a.payload.doc.data() as Cycle;
      //         const id = a.payload.doc.id;
      //         return { id, ...data}
      //       })
      //       )
      //     ).subscribe(_cycle => {
      //       resolve();
      //       return cycle =_cycle;
      //     });
      //   }).then(() => {
      //     console.log("Hokkkkkkkkkkkkkkki");
      //   }).catch(err => {
      //     console.log(err)
      //   })

      //     return cycle;
      // }




}
