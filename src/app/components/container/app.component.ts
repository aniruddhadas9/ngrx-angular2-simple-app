import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private outlet: any = {
    header: 'header',
    footer: 'footer'
  };

  constructor() {


  }

}
