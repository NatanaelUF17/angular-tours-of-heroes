import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero?: Hero;

  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  // ? Note: the '!' operator is a not null assetion operator
  // ? Note: + converts a string to a number
  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id)
      .subscribe(response => this.hero = response);
  }

  goBack(): void {
    this.location.back();
  }

}
