import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTeachersComponent } from './seccion-teachers.component';

describe('SeccionTeachersComponent', () => {
  let component: SeccionTeachersComponent;
  let fixture: ComponentFixture<SeccionTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
