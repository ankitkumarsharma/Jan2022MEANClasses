import { ViewchildC2Component } from './../viewchild-c2/viewchild-c2.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-c1',
  templateUrl: './viewchild-c1.component.html',
  styleUrls: ['./viewchild-c1.component.css']
})
export class ViewchildC1Component implements OnInit {
  @ViewChild(ViewchildC2Component, {static: true}) c2Com!:ViewchildC2Component; // component interaction
  name: string = '';
  @ViewChild("name1", {static:true}) inputName!:ElementRef; // get the value from template
  constructor() { 
    console.log("1")
  }

  ngOnInit(): void {
    console.log("2")

    this.name = this.c2Com.fullName;
    this.c2Com.showAlert();
    console.log(this.inputName.nativeElement.value);
    this.name = this.inputName.nativeElement.value;
  }
}
