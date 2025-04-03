import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../User';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  
  users :User[] = []
  service : DataService
  constructor( myService : DataService){
    this.service = myService
  }
  getData(){
  let ob =  this.service.getDataFromFile()
  ob.subscribe(res =>{

  this.users = <User[]>res
  })
  }
}
