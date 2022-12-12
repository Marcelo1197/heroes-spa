import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {
  heroes?: any[];

  constructor(
    private service:HeroesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.heroes = this.service.getHeroesByName(params['name']);
        console.log(this.heroes);
      });
  }
  showHeroeInfo = (idHeroe:number) => {
    this.router.navigate(['/heroe', idHeroe]);
  };
}
