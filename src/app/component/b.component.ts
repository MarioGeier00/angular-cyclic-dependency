import { Component } from '@angular/core';
import {AComponent} from "./a.component";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [AComponent],
  template: `
    <p>
      b works!
    </p>
  `,
})
export class BComponent {
}
