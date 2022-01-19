import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Ankit Sharma";
  title:string = "This is angular class";
  inputText:string = "Ankit"
  onAdd(value:string){
    alert(value)
  }
  onAdd2(){
    alert("jdbcdsjkdkjb")
  }
}
