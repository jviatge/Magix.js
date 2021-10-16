import { animes } from '../types';

export function Transition(anime:animes):void {
    anime._transition = `all ${anime.time}s ease-in-out`
    anime._target.forEach((target:any) => {
        target.style.transition = anime._transition
    })
}



 