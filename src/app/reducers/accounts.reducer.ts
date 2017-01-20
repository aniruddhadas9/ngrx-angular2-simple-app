import {ActionReducer, Action} from '@ngrx/store';
import {SearchActions} from '../actions/search.actions';

import {Account} from '../models/account';

export const accounts: ActionReducer<Account[]> = (state: Account[] = [], action: Action) => {

  switch (action.type) {
    case SearchActions.SEARCH:
      console.log('SearchReducer|SEARCH|action:%o', action);
      return action.payload;

    case SearchActions.ADD:
      console.log('SearchReducer|SEARCH_RESULT|action:%o', action);
      const exists = state.find(account => account.accountNumber === action.payload.accountNumber);

      if (exists) {
        // UPDATE
        return state.map(account => {
          return account.accountNumber === action.payload.accountNumber ? Object.assign({}, account, action.payload) : account;
        });
      } else {
        // ADD
        console.log('SearchReducer|SEARCH_RESULT|ADD|return:%o', [...state, Object.assign({}, action.payload)]);
        return action.payload;
      }
    case SearchActions.SEARCH_RESULT_DELETE:
      console.log('SearchReducer|SEARCH_RESULT_DELETE|action:%o', action);
      return state.filter(account => account.accountNumber !== action.payload);
    default:
      console.log('SearchReducer|default|action:%o', action);
      return state;
  }
};
