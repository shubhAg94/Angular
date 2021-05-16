import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  error: string;

  openDialog(){
    this.error = 'Error';
  }
  closeDialog(data){
    this.error = null;
    console.log(data);
  }
}
