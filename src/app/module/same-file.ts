import {NgModule} from "@angular/core";

@NgModule({imports: [BModule]})
export class AModule {}

@NgModule({imports: [AModule]})
export class BModule {}