import { MainGeftService } from './main-geft.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-geft',
  templateUrl: './main-geft.component.html',
  styleUrls: ['./main-geft.component.css']
})
export class MainGeftComponent implements OnInit {

  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: MainGeftService) { }

  ngOnInit(): void {
    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })
  }
}
