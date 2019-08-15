import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
// import { HEROES } from '../models/mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // heroes = HEROES; 
  heroes: Hero[];
  
  selectedHero: Hero;
  
  // constructor() { }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  } 
  // Create a function to retrieve the heroes from the service.
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
