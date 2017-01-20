import { Component, OnInit } from '@angular/core';
import {go} from "@ngrx/router-store";
import {AppStore} from "../../models/app-store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links = {
    dashboard: ['/dashboard'],
    search: ['/search'],
    result: ['/result']
  };
  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
  }

  private nextPage(pageName: string) {
    this.store.dispatch(go([pageName, { routeParam: 1 }], { query: 'string' }));
  }

}
