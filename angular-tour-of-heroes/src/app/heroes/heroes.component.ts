import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  // The parameter simultaneously defines a private heroService property
  // and identifies it as a HeroService injection site.

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  //   // This would not work in a real app.
  //   //Getting away with it because of the mocks
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
