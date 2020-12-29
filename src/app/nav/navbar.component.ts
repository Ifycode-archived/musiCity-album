import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <h2>Navigation section</h2>
    <button [routerLink]="['/albums']">All Albums</button>
    <hr>
  `
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
