import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
//import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
myForm:FormGroup;
productName:string;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({
    'productName':['',Validators.required]
    });
   }
onSubmit(value:string):void{
  alert("hello");
  console.log(' The Value Submmited',value);
}
  ngOnInit() {
  }

}
