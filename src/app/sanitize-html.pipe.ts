import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizeHTMLPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(raw_html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(raw_html);
  }
}
