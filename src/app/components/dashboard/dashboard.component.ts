import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../../models/account";
import {AppService} from "../../app.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../../models/app-store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public accounts: Observable<Account[]>;

  constructor(
    private appService: AppService,
    private store: Store<AppStore>
  ) {

    this.accounts = this.store.select("accounts");
    appService.loadAccounts();

    this.accounts.subscribe(data => console.log('dashboard|data:%o', data));


  }

  ngOnInit() {

  }

}
