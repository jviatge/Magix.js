import { animes, obj } from "../types"

export function Css(obj:obj, anime:animes, target:any):void {

    let style: any
                
    for (let i = 0; i < anime.css.length; i++) {

        if(i%2 == 0)
        {
            style = anime.css[i]
        }
        else
        {                        
            target.style[style] = anime.css[i][obj._toggle] 
        }
    }
 
}

