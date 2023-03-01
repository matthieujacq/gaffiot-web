import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { Entry } from '../data.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss'],
})
export class SearchTableComponent {
  @Input() data: Entry[] = [];
  @Input() searchBar?: SearchbarComponent;
  filteredData$ = of(this.data);

  ngOnInit() {
    if (this.searchBar) {
      this.filteredData$ = this.searchBar.filteredData$;
    }
  }
}
