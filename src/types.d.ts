export declare type animes = {
    target?    : string,  
    time       : number,             
    css        : Array,
    class      : Array, 
    order      : number,

    _target    : NodeListOf<HTMLElement>,
    _transition: string,
}

export declare type obj = {
    event : 'click' | 'hover' | 'key' | 'scroll' | 'in' | 'out' ;    // hover / key / scroll / in / out
    target: string,
    option?:{
        start?: number, 
        end?  : number
    }, // default null => start / end / key[]
    toggleIn  : boolean,       // true / default: false
    toggleOut : boolean,       // true / default: false
    animes    : Array<animes>,

    _Lineorder: Array<Lineorder>
    _target   : NodeListOf<HTMLElement>,
    _init     : boolean,
    _time     : number,
    _lastime  : number,
    _lastorder: number,
    _toggle   : number,
}

export declare type Default = {
    toggleIn : boolean,       
    toggleOut: boolean,
    time     : number,             
    order    : number,
    
    _init    : boolean, 
    _toggle  : number,
    _time    : number
}

export declare type Lineorder = {
    _order    : number,
    _time     : number,
}