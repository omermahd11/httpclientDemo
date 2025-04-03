import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b',
  imports: [FormsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
// get, update delete students info 

students : Student[]= []
service :DataService
constructor(service : DataService ){
  this.service = service
}

st : Student = {id : 0 , name :"Reem" , age : 22}
getData(){

 let ob = this.service.getStudents()

 ob.subscribe(res =>{
  console.log()
  this.students = <Student[]>res;
 })
}

addStudent(){

  this.service.addStudent(this.st)
}
}
