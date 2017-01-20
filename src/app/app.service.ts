import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AppStore} from './models/app-store';
import {Account} from './models/account';

const BASE_URL = 'http://localhost:3400/accounts/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AppService {
  accounts: Observable<Array<Account>>;

  constructor(private http: Http, private store: Store<AppStore>) {

  }

  loadAccounts() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD', payload }))
      .subscribe(action => {
        console.log("loadAccounts|action:%o", action);
        this.store.dispatch(action)
      });
  }

  saveAccount(account: Account) {
    (account.id) ? this.updateAccount(account) : this.createAccount(account);
  }

  createAccount(account: Account) {
    this.http.post(`${BASE_URL}`, JSON.stringify(account), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'SEARCH', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateAccount(account: Account) {
    this.http.put(`${BASE_URL}${account.accountNumber}`, JSON.stringify(account), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'SEARCH', payload: account }));
  }

  deleteAccount(account: Account) {
    this.http.delete(`${BASE_URL}${account.accountNumber}`)
      .subscribe(action => this.store.dispatch({ type: 'SEARCH_RESULT_DELETE', payload: account }));
  }
}
