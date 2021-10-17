import { animes, obj } from "../types";
import { Class } from "./Class";
import { Css } from "./Css";
import { Play } from "./Play";


export function Action(anime:animes, obj:obj, init:boolean = false):void {

    if (init) {
        base(anime,obj,init)
    } else {
        obj.event == 'scroll'? scroll(anime,obj,init) : base(anime,obj,init)
    }
}

function base(anime:animes, obj:obj, init:boolean = false) {
    anime._target.forEach(target => {
        play(anime, obj, init, target)
    })
}

function scroll(anime:animes, obj:obj, init:boolean = false):void {

    anime._target.forEach(target => {
        if (target.offsetTop <= window.scrollY + window.innerHeight / 1.5) { 
            play(anime, obj, init, target)
        }    
    })

    let scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight)

    if (scrollValue == 1) {
        play(anime, obj, init, anime._target[anime._target.length - 1])
    }
}

function play(anime:animes, obj:obj, init:boolean, target:any):void {

    Play(obj, init, anime, () => {
        anime.css   ? Css(obj, anime, target)  : null
        anime.class ? Class(obj, anime, target): null
    })
}

