import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCompositorComponent } from './ficha-compositor.component';

describe('FichaCompositorComponent', () => {
  let component: FichaCompositorComponent;
  let fixture: ComponentFixture<FichaCompositorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaCompositorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCompositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
