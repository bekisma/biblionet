import { MemoireAdmin } from './../models/MemoireAdmin';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { IngenierieService } from './../ingenierie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-memoire',
  templateUrl: './new-memoire.component.html',
  styleUrls: ['./new-memoire.component.css']
})
export class NewMemoireComponent implements OnInit {

  constructor(private memoireService: IngenierieService, private router: Router , private storage: AngularFireStorage) { }

  public memoire: any []=[];
  public cycles: any[]=[];
  public parcours: any[]=[];
  // public url : any;
  public percentage: any = this.memoireService.percentage;
  public url : any = null;

  item: MemoireAdmin = {
    nom:'',
    prenom:'',
    matricule:'' ,
    cycle:'',
    parcours:'',
    entreprise:'',
    encadreur:'',
    theme:'',
    annee:'',
    url: '',
    fileref: ''

  }

  public memoireForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    cycle: new FormControl('', Validators.required),
    parcours: new FormControl('', Validators.required),
    matricule: new FormControl('', Validators.required),
    entreprise: new FormControl('', Validators.required),
    encadreur: new FormControl('', Validators.required),
    annee: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    theme: new FormControl('', Validators.required),
  });

  public handleInput($event: Event){
    this.url =$event.target["files"];
    console.log(this.url);
  }

  public async addMemory(formData: MemoireAdmin){
   // await this.memoireService.addMemory(formData, this.url);
  }

  ngOnInit(): void {
    // this.memoireService.getCycl().then(cycles => {
    //   this.cycles = cycles;
    //   console.log(cycles);
    // });

    this.memoireService.percentageChanges.subscribe(x => this.percentage = x);
  }





  public zidme(data: FormData){
    console.log(data);
    this.memoireService.ajoutMemoire(data, this.url);
  }

}
