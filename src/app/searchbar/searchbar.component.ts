import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Entry } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  private _data: Entry[] = [];

  @Input() set data(value: Entry[]) {
    this._data = value;
    this.filteredData.next(value);
  }

  private filteredData = new BehaviorSubject<Entry[]>([]);
  filteredData$ = this.filteredData.asObservable();

  query = '';

  search() {
    const filteredData = this._data.filter((entry) =>
      entry.latin_raw.startsWith(this.query)
    );
    this.filteredData.next(filteredData);
  }
}
