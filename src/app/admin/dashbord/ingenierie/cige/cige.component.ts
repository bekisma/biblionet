import { CigeService } from './cige.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cige',
  templateUrl: './cige.component.html',
  styleUrls: ['./cige.component.css']
})
export class CigeComponent implements OnInit {

  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: CigeService) { }

  ngOnInit(): void {
    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })
  }

}
