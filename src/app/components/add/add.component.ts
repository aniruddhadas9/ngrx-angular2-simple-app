import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../../models/account";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../../models/app-store";
import {go} from "@ngrx/router-store";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public accounts: Observable<Account[]>;
  private account: Account;

  public searchForm: FormGroup; // our model driven form
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


    this.searchForm = new FormGroup({
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

  private searchAccount(model: Account, isValid: boolean) {
    model.userId = "userid";
    model.ticketNumber = "0012100";
    console.log('formdata|account: %o|isValid:%o', model, isValid);
    if (isValid) {
      this.appService.saveAccount(model);
      this.store.dispatch(go(['dashboard', { routeParam: 1 }], { query: 'string' }));
    } else {
      this.message = "Filled etails are not correct! please correct...";
    }
    //this.store.dispatch({type: 'SEARCH', payload: this.account});
  }

}
