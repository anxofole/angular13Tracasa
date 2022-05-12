import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(public heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getAll();
  }
}
