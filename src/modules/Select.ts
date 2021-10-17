import { obj } from '../types';

export function Select(obj:obj):void {

    let Allel = []

    // target start
    obj._target = document.querySelectorAll<HTMLElement>(obj.target)
    Allel.push(obj._target)
    

    // target animes
    obj.animes.forEach(anime => {
        if (anime.target) {     
            anime._target = document.querySelectorAll<HTMLElement>(anime.target)
            Allel.push(anime._target)
        } else {
            anime._target = obj._target
        }
    });

    // Get all element of init
    obj._Allel = Allel
    
}

