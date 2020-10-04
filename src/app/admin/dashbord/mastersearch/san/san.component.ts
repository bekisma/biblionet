import { SanService } from './san.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san',
  templateUrl: './san.component.html',
  styleUrls: ['./san.component.css']
})
export class SanComponent implements OnInit {

  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: SanService) { }

  ngOnInit(): void {
    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })
  }

}
