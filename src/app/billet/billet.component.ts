import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ITicket from '../models/tickets';
import ClickTravelService from '../services/click-travel.service';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.scss']
})
export class BilletComponent implements OnInit {

  public tickets: ITicket;
  public flight: string;

  constructor(private ticketService: ClickTravelService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params =>{
        this.flight = params.get("flight");
        console.log(this.flight);
        if(this.flight != undefined){
          this.getBillet();
        }
      }
    });
  }

public getBillet() {
  this.ticketService.getBilletByCode(this.flight).subscribe({
    next: ticket =>{
      this.tickets = ticket;
      console.log("ticket", this.tickets);
    },
    error: err=> {throw err;}
  });
  console.log("ticket",this.tickets);
}
}

