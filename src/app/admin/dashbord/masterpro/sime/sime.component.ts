import { SimeService } from './sime.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sime',
  templateUrl: './sime.component.html',
  styleUrls: ['./sime.component.css']
})
export class SimeComponent implements OnInit {

  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: SimeService) { }

  ngOnInit(): void {
    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })
  }
}
