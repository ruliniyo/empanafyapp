import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaInterpreteComponent } from './alta-interprete.component';

describe('AltaInterpreteComponent', () => {
  let component: AltaInterpreteComponent;
  let fixture: ComponentFixture<AltaInterpreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaInterpreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaInterpreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
