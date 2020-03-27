import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';
import { HeaderComponent } from '../header/header.component';
import { StudentRowComponent } from '../student-row/student-row.component';
import { RouterModule } from '@angular/router';
import { GenderPipe } from 'src/app/pipes/gender.pipe';
import { StudentService } from 'src/app/services/student.service';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async(() => {
    const serviceMock = {
    };
    TestBed.configureTestingModule({
      declarations: [ StudentListComponent, HeaderComponent, StudentRowComponent, GenderPipe ],
      imports: [ RouterModule ],
      providers: [ { provide: StudentService, useValue: serviceMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
