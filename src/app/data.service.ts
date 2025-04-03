import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
