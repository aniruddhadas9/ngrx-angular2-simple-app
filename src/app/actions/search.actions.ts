import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Account} from '../models/account';

@Injectable()
export class SearchActions {

  static SEARCH = 'SEARCH';
  static ADD = 'ADD';
  static SEARCH_RESULT_DELETE = 'SEARCH_RESULT_DELETE';
  static LOAD_ACCOUNTS = 'LOAD_ACCOUNTS';

  search(account: Account): Action {
    return {
      type: SearchActions.SEARCH,
      payload: account
    };
  };

  updateAccount(account: Account): Action {
    return {
      type: SearchActions.ADD,
      payload: account
    };
  }


  deleteAccount(account: Account): Action {
    return {
      type: SearchActions.SEARCH_RESULT_DELETE,
      payload: account
    };
  }

  loadAccountsSuccess(accounts: Account[]): Action {
    return {
      type: SearchActions.LOAD_ACCOUNTS,
      payload: accounts
    };
  }

}
