import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtiendaproductoComponent } from './addtiendaproducto.component';

describe('AddtiendaproductoComponent', () => {
  let component: AddtiendaproductoComponent;
  let fixture: ComponentFixture<AddtiendaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtiendaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtiendaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
