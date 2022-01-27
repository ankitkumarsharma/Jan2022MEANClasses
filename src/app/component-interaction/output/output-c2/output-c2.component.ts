import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-c2',
  templateUrl: './output-c2.component.html',
  styleUrls: ['./output-c2.component.css']
})
export class OutputC2Component implements OnInit {
  @Output() show: EventEmitter<any> = new EventEmitter();
  name = 'ankit';
  constructor() { }

  ngOnInit(): void {
  }
  onShow(){
    this.show.emit(this.name);
  }
}
