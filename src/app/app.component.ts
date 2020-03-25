import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Angular 4", "React", "Java", "JavaScript"];
  newItems = "";

  addItems = () => {
    if (this.newItems != "") {
      this.items.push(this.newItems);
      this.newItems = ""
    }
  }
  removeItem=(index)=>{
this.items.splice(index,1);
  }
}
