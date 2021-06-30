import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritocompradialogComponent } from './carritocompradialog.component';

describe('CarritocompradialogComponent', () => {
  let component: CarritocompradialogComponent;
  let fixture: ComponentFixture<CarritocompradialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritocompradialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritocompradialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
