import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearchComponent } from './heroes-search.component';

describe('HeroesSearchComponent', () => {
  let component: HeroesSearchComponent;
  let fixture: ComponentFixture<HeroesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
