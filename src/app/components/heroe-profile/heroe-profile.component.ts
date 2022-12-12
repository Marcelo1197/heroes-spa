import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-profile',
  templateUrl: './heroe-profile.component.html',
  styleUrls: ['./heroe-profile.component.css']
})
export class HeroeProfileComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor(
    private service: HeroesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsList => {
      let idHeroe = paramsList['id'];
      this.heroe = this.service.getHeroe(idHeroe);
    });
  }

}
