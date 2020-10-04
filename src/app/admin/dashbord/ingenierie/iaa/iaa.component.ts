import { IaaService } from './iaa.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-iaa',
  templateUrl: './iaa.component.html',
  styleUrls: ['./iaa.component.css']
})
export class IaaComponent implements OnInit {

  memoiresS: any;

  filteredProducts: any[];
  subscription: Subscription ;

  constructor(private memoireService: IaaService) { }

  ngOnInit(): void {
    this.memoiresS = this.memoireService.getMemories();
    console.log(this.memoiresS);

    this.memoireService.getMemories().subscribe(memories => {
      console.log(memories);
    })
  }

}
