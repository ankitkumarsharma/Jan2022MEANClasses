import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-c1',
  templateUrl: './output-c1.component.html',
  styleUrls: ['./output-c1.component.css']
})
export class OutputC1Component implements OnInit {
  name:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  showName(e:any){
    alert(e);
    this.name = e;
  }
}
