import { obj } from "../types";
import { Default } from "../types";
import { Action } from "./Action";
import { defaultValue } from "./Default";
import { Transition } from "./Transition";


export function Animes(obj:obj):void {

    
    obj.animes.forEach(anime => {

        // init
        !anime.time ? anime.time   = defaultValue.time : null
        !anime.order ? anime.order = defaultValue.order: null

        // Init DOM
        Action(anime, obj, obj._init)

        // Init transition
        // Transition(anime)
        
    });
}