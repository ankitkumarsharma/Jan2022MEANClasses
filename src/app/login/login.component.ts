import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username:'',
      password:''
    })
  }
  onLogin(){
    sessionStorage.setItem('data', this.loginForm.controls['username'].value);
    this.route.navigate(['/home']);
  }

}
