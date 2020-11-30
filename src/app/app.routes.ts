import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
    
        { path: 'home', component: HomeComponent },
        { path: 'list', component: ListComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);