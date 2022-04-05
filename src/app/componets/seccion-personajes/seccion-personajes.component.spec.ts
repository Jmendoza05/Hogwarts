import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPersonajesComponent } from './seccion-personajes.component';

describe('SeccionPersonajesComponent', () => {
  let component: SeccionPersonajesComponent;
  let fixture: ComponentFixture<SeccionPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
