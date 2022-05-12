import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  private heroList: Hero[] =  [
    new Hero('A'),
    new Hero('B'),
    new Hero('C'),
  ];

  public getAll(): Hero[] {
    return this.heroList;
  }
}
