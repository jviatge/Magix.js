import { Click, Hover, Default, obj } from '../types';

export const defaultValue :Default = {
    time     : 0.8,
    order    : 0,
    _init    :true,
    _toggle  : 0,
    _time    : 0
}

export function Init(obj:obj):void {

    obj._init   = defaultValue._init
    obj._toggle = defaultValue._toggle
    obj._time   = defaultValue._time

    // animes
    obj.animes.forEach(anime => {
        !anime.order ? anime.order = 0     : null
        !anime.queue ? anime.queue = false : null
    });

    obj._lastorder = 0    
}

export function click(click:Click):Click {

    typeof click === 'undefined' ? click = {
        toggleOut: true
    } : null
    
    click.toggleOut == null ? click.toggleOut = true : null

    return click
}

export function hover(hover:Hover):Hover {

    // typeof hover === 'undefined' ? hover = {

    // } : null



    return hover
}