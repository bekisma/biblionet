import { Router } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Course } from './../models/essayModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FileUpload } from './../models/essayModel';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EssaiService {
  private basePath = '/uploads';

  public filepath : any;
    public uploadPercent: Observable<number>;
    public downloadURL: Observable<string>;
    public percentage: any = null;
    public percentageChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.percentage);

    public setPercentage(percentage: any): void{
      this.percentage = percentage;
      this.percentageChanges.next(percentage);

    }

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private afs:AngularFirestore,
    private router: Router) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
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
            isValide:false,
            url: this.downloadURL,
            fileref: this.filepath
          }

          this.afs.collection("essai").add(newMemory).then(m => {
            console.log(m);
            this.router.navigate(['/']);
          }).catch(err => {
            console.log("error: ", err);
          });


        })
      })


    ).subscribe()
  }

}
