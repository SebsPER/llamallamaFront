import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetiendaproductoComponent } from './deletetiendaproducto.component';

describe('DeletetiendaproductoComponent', () => {
  let component: DeletetiendaproductoComponent;
  let fixture: ComponentFixture<DeletetiendaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetiendaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetiendaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
