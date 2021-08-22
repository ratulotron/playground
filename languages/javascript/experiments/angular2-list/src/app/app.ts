import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import axios from 'axios';

import { onsNotification } from 'angular2-onsenui';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  todos: any = [];

  constructor(http: Http) {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.todos = response.data;
        // console.log(this.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  alert() {
    onsNotification.alert('This is an Onsen UI alert notification test.');
  }
}
