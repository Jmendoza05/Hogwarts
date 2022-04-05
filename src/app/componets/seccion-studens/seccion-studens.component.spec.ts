import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionStudensComponent } from './seccion-studens.component';

describe('SeccionStudensComponent', () => {
  let component: SeccionStudensComponent;
  let fixture: ComponentFixture<SeccionStudensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionStudensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionStudensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
