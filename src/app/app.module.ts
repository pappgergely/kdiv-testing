import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ModifyStudentModalComponent } from './components/modify-student-modal/modify-student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    HeaderComponent,
    StudentRowComponent,
    GenderPipe,
    ModifyStudentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    ModifyStudentModalComponent,
  ],
  entryComponents: [
    ModifyStudentModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
