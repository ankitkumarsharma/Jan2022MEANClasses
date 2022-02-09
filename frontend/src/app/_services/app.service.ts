import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {  

  constructor(private http:HttpClient) { }
  nameArr = [
    {name:'Rahul', sirName:'Kumar'},
    {name:'Aditya', sirName:'Patel'},
    {name:'Ankit', sirName:'Sharma'},
    {name:'Manish', sirName:'Sharma'},
    {name:'Rahul', sirName:'Jogrge'},
    {name:'Manohar', sirName:'Kumar'},
  ]
  openDesc(){
    let name = "Rahul and Aditya are friends ...";
    return name;
  }
  getJson(){
    return of(this.nameArr);
  }
}
