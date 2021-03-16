import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  selectedHero?: Hero;

  heroes = HEROES;

  ngOnInit(): void {
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
