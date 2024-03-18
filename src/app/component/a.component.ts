import { Component } from '@angular/core';
import {BComponent} from "./b.component";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent],
  template: `
    <p>
      a works!
    </p>
  `,
})
export class AComponent {

}
