import { Component } from '@angular/core';
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

  getSaved(student: Student) {
    this.store.select('student').subscribe((s) => {
      if (!s.find((v) => v.id == student.id)) {
        this.store.dispatch(new StudentActions.AddStudent(student));
      }
    });
  }
  getDeleted(student: Student) {}
}
