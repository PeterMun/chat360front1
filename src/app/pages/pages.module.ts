import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientsComponent } from './clients/clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    DashboardComponent,
    ChatComponent,
    PagesComponent,
    UsersComponent,
    CalendarComponent,
    ClientsComponent

  ],
  exports: [
    DashboardComponent,
    ChatComponent,
    PagesComponent,
    UsersComponent,
    CalendarComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ]
})
export class PagesModule { }
