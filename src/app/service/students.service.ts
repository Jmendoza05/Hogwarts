import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { persons } from '../models/person.model';
import { SeccionStudensComponent } from '../componets/seccion-studens/seccion-studens.component';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  person: persons[]
  url = 'http://hp-api.herokuapp.com/api/characters/students'
  constructor(private http: HttpClient) { 
    this.person =[]    
  }
  crearStudent(Student : StudentsService): Observable<any>{
    return this.http.post(this.url,Student);
  }
  getStudents(){
    if(localStorage.getItem('students') === null){

    }else{
      this.person = JSON.parse(localStorage.getItem('students')|| '[]')
      return this.person;
    }
    return this.person;
  }
  addStudents(student: persons){
    let students: persons[] = []
    if(localStorage.getItem('students') === null){
      students.push(student);
      localStorage.setItem('students', JSON.stringify(students))
    }else{
      students = JSON.parse(localStorage.getItem('students') || '[]')
      students.unshift(student) 
      localStorage.setItem('students', JSON.stringify(students))     
    }
    
   
  }
  getAllStudents(): Observable<any>{
    return this.http.get(this.url)
  }

}


