import { Default, obj } from '../types';

export const defaultValue :Default = {
    toggleIn : false,       
    toggleOut: false,
    time     : 0.8,
    order    : 0,
    _init    :true,
    _toggle  : 0,
    _time    : 0
}

export function Init(obj:obj) {

    obj.toggleIn ? defaultValue.toggleIn   = obj.toggleIn : defaultValue.toggleIn  = false
    obj.toggleOut ? defaultValue.toggleOut = obj.toggleOut: defaultValue.toggleOut = false
    obj._init   = defaultValue._init
    obj._toggle = defaultValue._toggle
    obj._time   = defaultValue._time

    // animes
    obj.animes.forEach(anime => {
        !anime.order ? anime.order = 0 : null
    });

    obj._lastorder = 0    
}