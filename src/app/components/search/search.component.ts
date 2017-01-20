import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Account} from '../../models/account';
import {AppStore} from '../../models/app-store';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppService} from "../../app.service";
import {FormGroup, FormControl} from "@angular/forms";
import {go} from "@ngrx/router-store";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public accounts: Observable<Account[]>;
  private account: Account;

  public searchAccount: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  public message: string = ''; // toDisplay error message

  private outlet: any = {
    header: 'header'
  };

  constructor(private router: Router,
              private appService: AppService,
              private store: Store<AppStore>) {

    this.accounts = this.store.select('accounts');


    this.searchAccount = new FormGroup({
      phoneNumber: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      accountNumber: new FormControl(''),
      email: new FormControl(''),
      userId: new FormControl(''),
      ticketNumber: new FormControl(''),
      streetAddress: new FormControl(''),
      apt: new FormControl(''),
      zip: new FormControl('')
    });

    this.accounts.subscribe(data => console.log('search|data:%o', data));
  }

  ngOnInit(): void {

  }

  private searchAccountSubmit(model: Account, isValid: boolean) {
    console.log('formdata|account: %o|isValid:%o', model, isValid);
    if (isValid) {
      this.appService.searchAccounts(model.accountNumber);
      //this.store.dispatch(go(['dashboard', { routeParam: 1 }], { query: 'string' }));
    } else {
      this.message = "Filled etails are not correct! please correct...";
    }
    //this.store.dispatch({type: 'SEARCH', payload: this.account});
  }

}
