import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){}
  name:string = "Ankit Sharma";
  title:string = "This is angular class";
  inputText:string = "Ankit"
  onAdd(value:string){
    alert(value)
  }
  onAdd2(){
    alert("jdbcdsjkdkjb")
  }
  onLogout(){
    sessionStorage.removeItem('data');
    this.route.navigate(['/login']);
  }
}
