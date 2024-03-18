import {NgModule} from "@angular/core";
import {AService} from "./a.service";
import {BService} from "./b.service";

@NgModule({
    providers: [AService, BService],
})
export class ServiceModule {
}