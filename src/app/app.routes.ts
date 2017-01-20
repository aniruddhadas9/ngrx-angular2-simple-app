import {Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {ResultComponent} from './components/result/result.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AddComponent} from "./components/add/add.component";

export const appRoutes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];



