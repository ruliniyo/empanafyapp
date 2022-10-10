import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInterpretesComponent } from './listado-interpretes.component';

describe('ListadoInterpretesComponent', () => {
  let component: ListadoInterpretesComponent;
  let fixture: ComponentFixture<ListadoInterpretesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoInterpretesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoInterpretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
