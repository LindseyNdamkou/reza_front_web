import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalleComponent } from './salle/salle.component';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'salle', component: SalleComponent },
  { path: 'reservation', component:  ReservationComponent},
]

@NgModule({
  declarations: [SalleComponent, ReservationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SallePagesModule { }
