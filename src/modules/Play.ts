import { animes, obj } from "../types"

export function Play(obj:obj, init:boolean, anime:animes, action:Function):void {

    if (!init) {
        
        if (obj._lastorder != anime.order) {
            obj._time += obj._lastime * 1000
            obj._lastorder = anime.order

        } else {
            let Lineorder = obj._Lineorder.filter(function (Lineorder) {
                return Lineorder._order === anime.order;
            });
    
            obj._lastorder = Lineorder[0]._order
            obj._lastime = Lineorder[0]._time
        }
    }
    
    setTimeout(function() {        
        action()
    },obj._time)
 
}

