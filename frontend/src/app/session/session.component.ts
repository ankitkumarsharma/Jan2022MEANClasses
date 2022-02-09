import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('name','Ankit Sharma');
    sessionStorage.setItem('name','Ankit');
    //----------
    sessionStorage.getItem('name');
    sessionStorage.removeItem('name');
  }

}
