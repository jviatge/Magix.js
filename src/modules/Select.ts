import { obj } from '../types';

export function Select(obj:obj):void {

    // target start
    obj._target = document.querySelectorAll<HTMLElement>(obj.target)

    // target animes
    obj.animes.forEach(anime => {
        if (anime.target) {     
            anime._target = document.querySelectorAll<HTMLElement>(anime.target)
        } else {
            anime._target = obj._target
        }
    });
}

