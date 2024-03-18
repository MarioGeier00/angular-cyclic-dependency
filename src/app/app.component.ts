import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {A} from "./typescript/a";
import {B} from "./typescript/b";
import {ComponentModule} from './component/same-file';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentModule],
  template: `
    <app-a />
  `,
  styles: [],
})
export class AppComponent {

  constructor() {

    const a = new A();
    a.b = new B();

    // const aService = inject(AService);
  }

}
