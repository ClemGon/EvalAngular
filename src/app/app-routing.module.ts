import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilletComponent } from './billet/billet.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path: 'tickets/:code', component:TicketComponent},
  {path: 'billet/:flight', component:BilletComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
