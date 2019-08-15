// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Add a hero property, preceded by the @Input() decorator.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
