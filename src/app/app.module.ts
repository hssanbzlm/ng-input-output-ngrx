import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/student.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListStudentsComponent, DetailsStudentComponent],
  imports: [
    BrowserModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({
      student: reducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
