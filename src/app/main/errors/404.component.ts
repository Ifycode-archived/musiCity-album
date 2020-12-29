import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>404 page</h2>
    <p>Sorry, the page you are trying to connect to does not exist</p>
  `
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
