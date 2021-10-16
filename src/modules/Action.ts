import { animes, obj } from "../types";
import { Class } from "./Class";
import { Css } from "./Css";
import { Play } from "./Play";


export function Action(anime:animes, obj:obj, init:boolean = false):void {

    anime._target.forEach(target => {

        Play(obj, init, anime, () => {

            anime.css   ? Css(obj, anime, target)  : null
            anime.class ? Class(obj, anime, target): null

        })
    })

}

