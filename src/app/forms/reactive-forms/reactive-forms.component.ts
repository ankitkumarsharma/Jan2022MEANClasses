import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  regForm!:FormGroup;
  formDataValue:any;
  studyAreaDropdown:any = [
    {label:'Select', value: ''},
    {label:'Art', value: 'ART'},
    {label:'Science', value: 'SCI'},
    {label:'Commerce', value: 'COM'},
    {label:'Dancing', value: 'DAN'},
  ]
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      'firstName': '',
      'lastName':'',
      'email':'',
      'password':'',
      'dob':'',
      'profilePic':'',
      'studyArea':''
    })
  }
  onSubmitForm(){
    console.log(this.regForm);
    this.formDataValue = this.regForm.value;
  }
  onStudyAreaChange(event:any){
    console.log(event.target.value)
  }
}
