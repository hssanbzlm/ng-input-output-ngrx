import { Injectable } from '@angular/core'; 

import { Student } from './student';
let Students:Student[]=[   

  {
      id:1,
      name:"hssan",
      lastName:"Bouzlima"
  } ,
  {
      id:2,
      name:"Harry",
      lastName:"Kane"
  },
  {
      id:3,
      name:"Calvert",
      lastName:"Lewin"
  },
  {
      id:4,
      name:"Mohamed",
      lastName:"Salah"
  }
] 


@Injectable({
  providedIn: 'root'
})
export class ManageStudentService {

  constructor() { } 



  save(student:Student){   
    
    if(Students.indexOf(student)<0) 
    {

      Students.push(student); 
    }
    else 
    this.update(student); 

  } 

  delete(student:Student){  
    Students=Students.filter((s)=>s.id!=student.id);  

  }

  update(student:Student){  
    Students=Students.map((s)=>{
      if(s.id==student.id){
        return student;
      } else {return s}

    })

  }
  find(id){  

   return Students.find((s)=>s.id==id);

  } 
  all(){ 
    return Students;
  }
}
