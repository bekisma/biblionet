import { AngularFireStorage } from '@angular/fire/storage';
import { MemoireStudent } from './../../../models/MemoireStudent';
import { StudentService } from './../../../service/student.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private memoireService: StudentService, private router: Router , private storage: AngularFireStorage) { }

public memoire: any []=[];
  public cycles: any[]=[];
  public parcours: any[]=[];
  // public url : any;
  public percentage: any = this.memoireService.percentage;
  public url : any = null;

  item: MemoireStudent = {
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

  public async addMemory(formData: MemoireStudent){
    await this.memoireService.addMemory(formData, this.url);
  }

  public async addMemory2(data : FormData){
  //  this.memoireService.addnewmemory(data, this.url);
  }

  // public async addMemory3(){

  //   this.memoireService.addItem(this.item);

  //   this.item.nom = '';
  //   this.item.prenom = '';
  //   this.item.matricule = '' ;
  //   this.item.cycle = '';
  //   this.item.parcours = '';
  //   this.item.entreprise =  '';
  //   this.item.encadreur = '';
  //   this.item.theme = '';
  //   this.item.annee = '' ;
  //  }

  onSubmit(){
    // let formData: MemoireStudent;
    // this.memoireService.addMemory(formData, this.url);

    this.memoireService.addItem(this.item)

    this.item.nom = '';
    this.item.prenom = '';
    this.item.matricule = '' ;
    this.item.cycle = '';
    this.item.parcours = '';
    this.item.entreprise =  '';
    this.item.encadreur = '';
    this.item.theme = '';
    this.item.annee = '' ;
    // this.item.url = [''],
    // this.item.fileref = ''
  }

  ngOnInit(): void {
    this.memoireService.getCycle().then(cycles => {
      this.cycles = cycles;
      console.log(cycles);
    })

    this.memoireService.percentageChanges.subscribe(x => this.percentage = x);
  }

  loadParcours(value){
    this.memoireService.getParcours(value).then(parcours =>{
      this.parcours = parcours;
      console.log(parcours)
    })

    console.log(value);
  }

  public zidme(data: FormData){
    console.log(data);
    this.memoireService.ajoutMemoire(data, this.url);
  }


}
