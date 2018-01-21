import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
myForm:FormGroup;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({ // create new variable myform
      'sku':['ASW1216'],
      'Name':['Aniket Bhasvar']
    });
   }

  ngOnInit() {}
  onSubmit(value:string):void{
    alert("Hello");
  console.log('Your value is submmited:',value);
}
}

/* To bind exiting formgroup  and form controls use formgroup and form controls */