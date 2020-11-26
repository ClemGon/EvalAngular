import { Component, OnInit } from '@angular/core';
import IClickTravel from './models/click-travel';
import ClickTravelService from './services/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'Choose your dream destination...';
  public clickTravels: IClickTravel[];


  constructor(private clicktravelService: ClickTravelService) {}

  ngOnInit(): void {
    this.clicktravelService.getClickTravel().subscribe({
      next: clickTravel =>{
        this.clickTravels = clickTravel.filter(u => u.isDreamDestination != false);
        console.log("ClickTravel", this.clickTravels);
      },
      error: err=> {throw err;}
    });
    console.log(this.clickTravels);
  }

}
