import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCompositorComponent } from './alta-compositor.component';

describe('AltaCompositorComponent', () => {
  let component: AltaCompositorComponent;
  let fixture: ComponentFixture<AltaCompositorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCompositorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCompositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
