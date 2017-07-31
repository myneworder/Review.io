import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `<h2>Hello {{name}}</h2> <h4>Review.io is a peer-to-peer code review site to share & build applications that run on smart contracts. Build directly from Github & Deploy your application on Ethereum Blockchain.</h4>`,
})

export class AppComponent { name = 'Developers'; }
