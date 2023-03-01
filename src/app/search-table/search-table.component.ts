import { Component, Input } from '@angular/core';
import { Entry } from '../data.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss'],
})
export class SearchTableComponent {
  @Input() data: Entry[] = [];
}
