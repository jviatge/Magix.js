export declare type obj = {
    event : 'click' | 'hover' | 'key' | 'scroll' | 'in' | 'out' ;    // hover / key / scroll / in / out

    // option
    click     : Click
    hover     : Hover
    scroll    : Scroll

    target    : string,
    animes    : Array<animes>,

    _Lineorder: Array<Lineorder>
    _target   : NodeListOf<HTMLElement>,
    _init     : boolean,
    _time     : number,
    _lastime  : number,
    _lastorder: number,
    _toggle   : number,
    _Allel    : Array<NodeListOf<HTMLElement>>,
}

export declare type animes = {
    target?    : string,  
    queue      : boolean,
    time       : number,             
    css        : Array,
    class      : Array, 
    order      : number,

    _target    : NodeListOf<HTMLElement>,
    _transition: string,
}

export declare type Default = {
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

/* Options */
export declare type Click = {
    // toggleIn  : boolean,       
    toggleOut : boolean,      
}
export declare type Hover = {

}
export declare type Scroll = {

}