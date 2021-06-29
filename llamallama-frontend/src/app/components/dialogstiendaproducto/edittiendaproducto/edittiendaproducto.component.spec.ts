import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittiendaproductoComponent } from './edittiendaproducto.component';

describe('EdittiendaproductoComponent', () => {
  let component: EdittiendaproductoComponent;
  let fixture: ComponentFixture<EdittiendaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittiendaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittiendaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
