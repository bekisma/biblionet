
import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import { Inject } from '@angular/core';
import { EssaiService } from './../../../service/essai.service';
import { FileUpload } from './../../../models/essayModel';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private uploadService: EssaiService) { }

  public url : any = null;
  public percentages: any = this.uploadService.percentage;

  public memoireForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    matricule: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

// Universities

public handleInput($event: Event){
  this.url =$event.target["files"];
  console.log(this.url);
}

public addm(data: FormData){
  console.log(data);
  this.uploadService.ajoutMemoire(data, this.url);

}


}


