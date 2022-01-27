import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-c2',
  templateUrl: './viewchild-c2.component.html',
  styleUrls: ['./viewchild-c2.component.css']
})
export class ViewchildC2Component implements OnInit {
  fullName:string = "Maharaja ji";
  constructor() { }

  ngOnInit(): void {
  }

  showAlert(){
    // alert(this.fullName);
  }
}
