import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/container/app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import {StoreModule} from '@ngrx/store';
import {RouterStoreModule, routerReducer} from '@ngrx/router-store';
import { HeaderComponent } from './components/header/header.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {accounts} from "./reducers/accounts.reducer";
import {AppService} from "./app.service";
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    HeaderComponent,
    DashboardComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes/*, { useHash: true}*/),
    StoreModule.provideStore({accounts, router: routerReducer}),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
