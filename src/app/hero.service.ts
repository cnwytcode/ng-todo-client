import { Injectable } from '@angular/core';
// import the Observable and of symbols from RxJS.
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }
  constructor(private messageService: MessageService) { }

  // Add a getHeroes method to return the mock heroes.
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {

    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) returns an Observable<Hero[]> that emits a single value, 
    // the array of mock heroes.
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
