import {Account} from './account';
import {RouterState} from "@ngrx/router-store";

export interface AppStore {
  accounts: Account[];
  router: RouterState;
  account: Account;
}
