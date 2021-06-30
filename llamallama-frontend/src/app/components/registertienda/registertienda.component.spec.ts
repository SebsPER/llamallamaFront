import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertiendaComponent } from './registertienda.component';

describe('RegistertiendaComponent', () => {
  let component: RegistertiendaComponent;
  let fixture: ComponentFixture<RegistertiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
