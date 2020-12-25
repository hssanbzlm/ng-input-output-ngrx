import { SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  constructor() { }
   
  @Input() student:Student;
  @Output() saved=new EventEmitter();
  @Output() deleted= new EventEmitter();
  ngOnInit(): void {
  } 
 

  clickSave(student){
    this.saved.emit(student);

  } 
  clickDelete(student){
    this.deleted.emit(student);
  } 

  clickCancel(){
    this.student={id:null,name:"",lastName:""};
  }

}
