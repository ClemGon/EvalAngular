import { Injectable } from '@angular/core';
import IClickTravel from '../models/click-travel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}
