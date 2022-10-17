import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGeneroComponent } from './alta-genero.component';

describe('AltaGeneroComponent', () => {
  let component: AltaGeneroComponent;
  let fixture: ComponentFixture<AltaGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
