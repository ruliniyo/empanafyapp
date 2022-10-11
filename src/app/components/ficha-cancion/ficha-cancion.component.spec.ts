import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCancionComponent } from './ficha-cancion.component';

describe('FichaCancionComponent', () => {
  let component: FichaCancionComponent;
  let fixture: ComponentFixture<FichaCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaCancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
