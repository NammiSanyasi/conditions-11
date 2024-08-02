import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Nammi";
  isNammi = true;
  
  fun(){
    if (this.isNammi) {
      this.isNammi = false;
    }
    else{
      this.isNammi = true;
    }
  }
  value!:number;
  value1!:string;
}
