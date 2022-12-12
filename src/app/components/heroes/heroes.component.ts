import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes?: Heroe[];

  constructor(
    private service:HeroesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['name']) {
      this.activatedRoute.params.subscribe(params => {
        this.heroes = this.service.getHeroesByName(params['name']);
        console.log(this.heroes);
      });
    } else {
      this.heroes = this.service.getHeroes();
    }
  }

  showHeroeInfo = (idHeroe:number) => {
    this.router.navigate(['/heroe', idHeroe]);
  };
}
