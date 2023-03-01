import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-definition-card',
  templateUrl: './definition-card.component.html',
  styleUrls: ['./definition-card.component.scss'],
})
export class DefinitionCardComponent {
  private wordId = inject(ActivatedRoute).paramMap.pipe(
    map((params) => parseInt(params.get('id') ?? ''))
  );
  private data = inject(DataService).data;

  definition$ = this.wordId.pipe(map((id) => this.data[id]));
}
