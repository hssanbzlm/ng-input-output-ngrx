import { Component } from '@angular/core';
import { ManageStudentService } from './manage-student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ngrx'; 
  student:Student;
  constructor(private service:ManageStudentService){

  }


  selectedStudent(student){   
    this.student=student; 
  } 

  getSaved(student:Student){ 

     this.service.save(student);
  } 
  getDeleted(student:Student){  
    this.service.delete(student);
  }
}
