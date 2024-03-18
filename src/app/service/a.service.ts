import {Injectable} from "@angular/core";
import {BService} from "./b.service";

@Injectable()
export class AService {
    constructor(BService: BService) {
    }
}