import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoueurComponent } from './loueur/loueur.component';
import { ClientComponent } from './client/client.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  { path: 'loueur', component: LoueurComponent },
  { path: 'client', component: ClientComponent }
]

@NgModule({
  declarations: [LoueurComponent, ClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class AccountPagesModule { }
