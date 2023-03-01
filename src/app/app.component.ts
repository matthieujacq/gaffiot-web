import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gaffiot';
  data = inject(DataService).data;
  first = this.data[0];
}
