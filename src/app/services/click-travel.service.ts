import { Injectable } from '@angular/core';
import IClickTravel from '../models/click-travel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ITicket from '../models/tickets';

@Injectable({
  providedIn: 'root'
})
export default class ClickTravelService {

  constructor(private httpClient: HttpClient) { }

  public getClickTravel(): Observable<IClickTravel[]>{
    let url = "https://travel-api.clicksomeone.com/destinations";
    let response = this.httpClient.get<IClickTravel[]>(url);
    return response;
}

public getTicketsForDestination(destination: string): Observable<ITicket[]>{
  let query = { where : { to : destination}};
  let strQuery = JSON.stringify(query);
  let ticketsUrl = "https://travel-api.clicksomeone.com/tickets?filter="+encodeURI(strQuery);
  return this.httpClient.get<ITicket[]>(ticketsUrl);
}

public getBilletByCode(flight: string): Observable<ITicket>{
  let query = { where : { flight : flight}};
  let strQuery = JSON.stringify(query);
  let ticketsUrl = "https://travel-api.clicksomeone.com/tickets?filter="+encodeURI(strQuery);
  return this.httpClient.get<ITicket>(ticketsUrl);
}
}
