import { MemoireService } from './../../../services/memoire.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-parcours',
  templateUrl: './list-parcours.component.html',
  styleUrls: ['./list-parcours.component.css']
})
export class ListParcoursComponent implements OnInit {

   // memoires: Memoire[];

  // memoires: {nom: string}[];
  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: MemoireService) {

    // this.memoireService.getMemoires()
    // .subscribe(memoires => this.filteredProducts = this.memoires = memoires);

  }

  // mem: any;

  ngOnInit(): void{
    // this.memoireService.getMemories().subscribe(memoiresS => {
    //   console.log(memoiresS);
    //   this.memoiresS = memoiresS;
    // });

    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })

  }

  filter(query: string){

    // console.log(query);
    // this.filteredProducts = (query)?
    // this.memoires.filter(m => m.nom.toLowerCase.includes(query)):this.memoires;

  }

  ngOnDestroy(){
      // this.subscription.unsubscribe;
  }

  // term: string;
  // rapport: string;

  // filterData = [
  //   {
  //     firstName: 'Celestine',
  //     lastName: 'Schimmel',
  //     address: '7687 Jadon Port'
  //   },
  //   {
  //     firstName: 'Johan',
  //     lastName: 'Ziemann PhD',
  //     address: '156 Streich Ports'
  //   },
  //   {
  //     firstName: 'Lizzie',
  //     lastName: 'Schumm',
  //     address: '5203 Jordon Center'
  //   },
  //   {
  //     firstName: 'Gavin',
  //     lastName: 'Leannon',
  //     address: '91057 Davion Club'
  //   },
  //   {
  //     firstName: 'Lucious',
  //     lastName: 'Leuschke',
  //     address: '16288 Reichel Harbor'
  //   }
  // ];

  // filterMemory = this.memoires;


}
