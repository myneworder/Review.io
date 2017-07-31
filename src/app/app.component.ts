import { Component } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <h4>Review.io is a peer-to-peer code review site to share & build applications that run on smart contracts. Build directly from Github & Deploy your application on Ethereum Blockchain.</h4>`,
})

export class AppComponent { name = 'Developers'; }
