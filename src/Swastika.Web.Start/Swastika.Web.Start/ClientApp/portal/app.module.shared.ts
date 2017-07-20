import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { MainSidebarComponent } from './components/_shared/main-sidebar.component';
import { HeaderNavbarComponent } from './components/_shared/header-navbar.component';
import { HomeComponent } from './components/pages/home.component';
import { AddArticleComponent } from './components/pages/add-article.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        MainSidebarComponent,
        HeaderNavbarComponent,
        AddArticleComponent,
        //CounterComponent,
        //FetchDataComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'add-article', component: AddArticleComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
