import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IClickTravel from '../models/click-travel';
import ITicket from '../models/tickets';
import ClickTravelService from '../services/click-travel.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public tickets: ITicket[];
  public destination: string;


  constructor(private ticketService: ClickTravelService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params =>{
        this.destination = params.get("code");
        console.log(this.destination);
        if(this.destination != undefined){
          this.getTickets();
        }
        console.log
      }
    });
  }

  public getTickets(){
    this.ticketService.getTicketsForDestination(this.destination).subscribe({
      next: ticket =>{
        this.tickets = ticket;
        console.log("ClickTravel", this.tickets);
      },
      error: err=> {throw err;}
    });
    console.log(this.tickets);
  }

}
