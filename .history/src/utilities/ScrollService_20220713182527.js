import { TOTAL_SCREENS } from "./commonUtis";
import { Subject } from "rxjs";

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadcaster= new Subject()
}