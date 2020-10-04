import { ActivatedRoute, Router } from '@angular/router';
import { MemoireAdmin } from './../models/MemoireAdmin';
import { Component, OnInit } from '@angular/core';
import { IngenierieService } from '../ingenierie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = true;
  pdfSrc: any ;


  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
//
memoire;
propertyId: any;
// property = new Memoire();
  constructor(
    private memoireService: IngenierieService,
    private route:ActivatedRoute,
    private router:Router) {
      // let id = this.route.snapshot.paramMap.get('id')
      // if (id) this.memoireService.get(id).take(1).subscribe(p => this.memoire = p);
     }

  public currentMemory: MemoireAdmin;
  public currentId: any = this.route.snapshot.paramMap.get("id");
  public image: any;
  public nom: any;
  public theme: any;
  public matricule: any;
  public url: any;
  public cycle: any[];
  public parcours: any;
  public activeCycle: any ;
  public noActiveCycle: any;


  public async getMemery() {

    this.currentMemory = await this.memoireService.getMemory(this.currentId);
    console.log(this.currentMemory);
  }

  // public getRap(){
  //   this.currentMemory = this.memoireService.getMemoires(this.currentId);
  // }




  ngOnInit(): void {

    // this.propertyId = +this.route.snapshot.params['id'];
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
        // this.memoireService.getProperty(this.propertyId).subscribe(
        //   (data: Iproperty )=> {
        //     this.property = data;
        //     console.log(data);
        //   }
        // )
    //   }
    // )

    this.getMemery();
    // this.pdfSrc = this.memoireService.getPdf();
    // this.memoireService.getCycles().then(cycle => {
    //   this.cycle = cycle ;
    // })

  }

}
