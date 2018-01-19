import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 onSubmit(form:any):void{
   console.log('The Value Submitted:',form);
 }
}
