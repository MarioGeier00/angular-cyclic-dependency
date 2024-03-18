import {Component, NgModule} from "@angular/core";

@Component({
    selector: 'app-a',
    template: `<app-b/>`,
})
export class AComponent {
}

@Component({
    selector: 'app-b',
    template: `<app-a/>`,
})
export class BComponent {
}

@NgModule({declarations: [AComponent, BComponent], exports: [AComponent, BComponent]})
export class ComponentModule {
}
