import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStudentModalComponent } from './modify-student-modal.component';

describe('ModifyStudentModalComponent', () => {
  let component: ModifyStudentModalComponent;
  let fixture: ComponentFixture<ModifyStudentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyStudentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
