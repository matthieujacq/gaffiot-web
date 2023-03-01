import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
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

  definition$ = this.wordId.pipe(
    map((id) => this.data[id]),
    tap((definition) => {
      // Replace \tag{...} with <tag>...</tag>
      definition.french = definition.french.replace(
        /\\(\w+)\{([^}]+)}/g,
        '<$1>$2</$1>'
      );
      // remove remaining \tag
      definition.french = definition.french.replace(/\\(\w+)/g, '');
      // enclose text between </pp> and : or [
      definition.french = definition.french.replace(
        /(<\/(?:pp|rub)> *)(\[.*] *)?([^:\[<]+)/g,
        "$1$2<span class='main-def'>$3</span>"
      );
      // enclose text between brackets in <i>...</i>
      definition.french = definition.french.replace(
        /\[([^\]]+)\]/g,
        '<span class="comment">$1</span>'
      );
    })
  );

  prev$ = this.wordId.pipe(map((id) => (id ? this.data[id - 1] : null)));
  next$ = this.wordId.pipe(
    map((id) => (id < this.data.length - 1 ? this.data[id + 1] : null))
  );
}
