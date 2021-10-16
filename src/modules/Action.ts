import { animes, obj } from "../types";
import { Play } from "./Play";


export function Action(anime:animes, obj:obj, init:boolean = false):void {

    anime._target.forEach(target => {

        Play(obj, init, anime, () => {
            
            anime.css ? target.style[anime.css[0]] = anime.css[1][obj._toggle] : null
            //     // CLASS
            //     if (anime.class) {
            //         if (anime.class.length == 1) {
            //             target.classList.toggle(anime.class[0])
            //         } else if (anime.class.length == 2) {
            //             anime.class.map( (v: string) => target.classList.toggle(v) )
            //         }
            //     }
        })
    })

}

