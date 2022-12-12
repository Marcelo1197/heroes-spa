import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeProfileComponent } from './heroe-profile.component';

describe('HeroeProfileComponent', () => {
  let component: HeroeProfileComponent;
  let fixture: ComponentFixture<HeroeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
