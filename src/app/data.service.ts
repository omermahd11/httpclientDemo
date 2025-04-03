import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http : HttpClient
  constructor( http :HttpClient) {
    this.http = http
   }

   getDataFromFile(){

   let ob =  this.http.get("users.json")
   ob.subscribe(res=>{

    console.log(res)
   })
    return ob
   }


   getStudents(){

    let ob = this.http.get("http://localhost:8080/api/students")

    return ob
   }

   addStudent( s : Student){
    
   let url = "http://localhost:8080/api/students"
let ob =this.http.post(url , s)
  ob.subscribe(res => {

    console.log(res)
    alert("done")
  })
   }
}
