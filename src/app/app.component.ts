import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Store } from '@ngrx/store';
import { AppState } from './state/app-state';
import * as StudentActions from './state/actions/student.action';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-ngrx';
  student: Student;
  students: Observable<Student[]>;
  constructor(private store: Store<AppState>) {
    this.students = store.select('student');
  }

  selectedStudent(student) {
    this.student = student;
  }

  getSaved(student: Student[]) {
    if (student[0].id == student[1].id) {
      this.store.dispatch(new StudentActions.UpdateStudent(student[0]));
    } else {
      this.store.dispatch(new StudentActions.AddStudent(student[0]));
    }
    this.student = { id: null, name: '', lastName: '' }; //reinitialize input value of details-student
  }
  getDeleted(student: Student) {
    this.store.dispatch(new StudentActions.DeleteStudent(student));
  }
}
