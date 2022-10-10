import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCompositoresComponent } from './listado-compositores.component';

describe('ListadoCompositoresComponent', () => {
  let component: ListadoCompositoresComponent;
  let fixture: ComponentFixture<ListadoCompositoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCompositoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCompositoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
