import { obj } from "../types"
import { Reverse } from "./Reverse"

export function Toggle(obj:obj):void {

    // REVERSE
    obj.animes = Reverse(obj.animes, true)
    obj._Lineorder = Reverse(obj._Lineorder, true)
    // obj.animes.forEach(anime => {
    //     console.log(Reverse(anime.css, true));
    // });

    // SWITCH
    obj._toggle == 1 ? obj._toggle = 0 : obj._toggle = 1 

    // RESET
    obj._time      = 0
    obj._lastime   = 0
    obj._lastorder = 0
}

