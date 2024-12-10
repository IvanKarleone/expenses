import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hb-not-found',
  templateUrl: './not-found.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
