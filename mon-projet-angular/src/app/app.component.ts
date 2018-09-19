import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Laundry app';
  
  setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
  );
}
