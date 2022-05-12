import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<h1>ALL PROFILES</h1>
    <a [routerLink]="['new']">new</a><br/>
    <a [routerLink]="['6']">edit 6</a><br/>
    <router-outlet></router-outlet>
    <hr>
  `
})
export class AllProfilesComponent {

}
