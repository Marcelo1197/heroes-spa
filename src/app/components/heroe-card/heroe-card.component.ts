import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input()
  heroe: any = { };
  @Input()
  index?: number;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  showHeroeInfo = () => this.router.navigate(['/heroe', this.index]);

}
