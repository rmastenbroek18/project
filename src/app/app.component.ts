import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

      onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
    public value: Date = new Date(2000, 2, 10);
}
