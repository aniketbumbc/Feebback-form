import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.css']
})
export class FormWithValidationComponent implements OnInit {
myForm:FormGroup;
name:AbstractControl;
number:AbstractControl;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({
      'name':['',Validators.required],
      'number':['',Validators.required]
    });
    this.name=this.myForm.controls['name'];
    this.number=this.myForm.controls['number'];
   }

  ngOnInit() {
  }
  onSend(value:string):void{
    console.log("The data for validation", value);
  }

}
