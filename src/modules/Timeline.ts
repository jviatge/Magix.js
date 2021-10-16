import { obj,Lineorder } from "../types"
import { Reverse } from "./Reverse";

export function Timeline(obj:obj):void {

    type Order = {
        order: number
    }

    // sort by order
    obj.animes.sort(compare);

    // get order and time
    let order:Array<Order> = []
    obj.animes.forEach(anime => {
        order.push({
            order: anime.order,
        })
    });

    // get Max time by order
    let lineorder : Array<Lineorder> = []
    let ordertmp  : number        = 0
    let maxTime   : number        = 0

    obj.animes.forEach((anime, i) => {
        if (ordertmp == anime.order) {
            if (maxTime < anime.time) {
                maxTime = anime.time
            }
        } else {
            lineorder.push({
                _order: ordertmp,
                _time: maxTime
            })
            maxTime = anime.time
            ordertmp = anime.order
        }
        if (i === obj.animes.length - 1){ 
            lineorder.push({
                _order: ordertmp,
                _time: maxTime
            })
        }
    });
    
    obj._Lineorder = lineorder

    // get reverse
    // let cacheReverse = Reverse(order, true)
    
    // set _timeline
    // obj.animes.forEach((anime, index) => {
    //     anime._timeline = {
    //         _id: index,
    //         _order:[order[index].order, cacheReverse[index].order],
    //     }
    // });

}

// reorder by order
function compare(a:any, b:any) {
    if (a.order > b.order) return 1;
    if (b.order > a.order) return -1;
    return 0;
}







