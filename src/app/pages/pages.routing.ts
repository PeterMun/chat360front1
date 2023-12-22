

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChatComponent } from "./chat/chat.component";
import { UsersComponent } from "./users/users.component";
import { ClientsComponent } from "./clients/clients.component";
import { authGuard } from '../guards/auth.guard';
import { ClientChatComponent } from "./client-chat/client-chat.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [authGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'users', component: UsersComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'chatClient', component: ClientChatComponent }
        ]
    }
]


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})


export class PagesRoutingModule {}


