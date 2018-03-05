import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { INCREMENT } from '../counter';
import { AppState } from '../appType'

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  readNumber
  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.readNumber = state.counter;
    });
  }

  ngOnInit() {
  }
  addOne() {
    this.store.dispatch({ type: INCREMENT })
  }

}
