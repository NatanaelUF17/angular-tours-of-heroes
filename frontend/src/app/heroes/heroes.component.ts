import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((response: any) => {
        console.log(response);
        this.heroes = response;
      });
  }

}
