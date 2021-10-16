import { obj } from "./types";
import { Animes } from "./modules/Animes";
import { Select } from "./modules/Select";
import { Init } from "./modules/Default";
import { Listener } from "./modules/Listener";
import { Timeline } from './modules/Timeline';

"Une super doc"
export function Magix(obj:obj):void{

    // Start init
    init(obj)

    // Create listener
    const listener = new Listener(obj)

}

function init(obj:obj):void{

    // Default value
    Init(obj)

    // Get DOM
    Select(obj)

    // Create Timeline
    Timeline(obj)

    // Get Animes
    Animes(obj)

    // End init
    obj._init = false
}
