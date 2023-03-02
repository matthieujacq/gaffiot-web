import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Entry } from '../data.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  private _data: Entry[] = [];
  private elRef = inject(ElementRef);

  ngOnInit() {
    this.elRef.nativeElement.querySelector('input').focus();
  }

  @Input() set data(value: Entry[]) {
    this._data = value;
    this.search();
    // this.filteredData.next(value);
  }

  private filteredData = new BehaviorSubject<Entry[]>([]);
  filteredData$ = this.filteredData.asObservable();

  private state = inject(StateService);
  query = this.state.query;

  search() {
    this.state.query = this.query;
    const filteredData = this._data.filter((entry) =>
      entry.latin_raw.startsWith(this.query)
    );
    this.filteredData.next(filteredData);
  }
}
