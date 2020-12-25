import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    DetailsStudentComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
