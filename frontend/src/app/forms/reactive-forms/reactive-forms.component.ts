import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  dataArr:any = [];
  submitted:boolean = false;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      'firstName': ['', Validators.required],
      'lastName':'',
      'email':['', [Validators.required, Validators.email]],
      'password':[''],
      'dob':'',
      'profilePic':'',
      'studyArea':''
    });
    // this.regFormSetValue();
    // this.regForm.controls['firstName'].patchValue('ankit');
  }
  get form(){
    return this.regForm.controls;
  }
  regFormSetValue(){
    // this.regForm.setValue({
      this.regForm.patchValue({
      'firstName': 'aaa',
      'lastName':'bbb',
    })
  }
  onSubmitForm(){
    this.submitted = true;
    if(this.regForm.valid){
      this.submitted = false;
      console.log(this.regForm);
      this.dataArr.push(this.regForm.value);
      this.formDataValue = this.regForm.value;
    } else {
      this.submitted = true;
      this.regForm.markAllAsTouched();
    }
  }
  onStudyAreaChange(event:any){
    console.log(event.target.value)
  }
}
