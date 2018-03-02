import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  readNumber=176
  constructor() { }

  ngOnInit() {
  }
  addOne(){
    this.readNumber++;
  }

}
