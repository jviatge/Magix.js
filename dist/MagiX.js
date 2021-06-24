function targets(targets){
    if(Array.isArray(targets)){
        let arrTargets = Array()
        targets.forEach(element => {
            document.querySelectorAll(element).forEach(selector => {
                arrTargets.push(selector) 
            })
        })
        return arrTargets
    }else{
        return document.querySelectorAll(targets)
    }
}

function animes(params) {
    params.animes.forEach(anime => {
        if(!anime.jscode){
            anime.targets ? anime.targetName = anime.targets : null
            anime.targets ? anime.targets = targets(anime.targets) : null
            !anime.time   ? anime.time = 0.4   : null
        } 
    })
}

function transition(animes) {
    animes.targets.forEach(target => {
        target.style.transition = `all ${animes.time}s`;
    })
}

function style(animes) {
    for (const property in animes.actions) {
        animes.targets.forEach(target => {
            target.style[property] = animes.actions[property][1]
        })
    }
}

function init(params) {
   
    params.animes.forEach(anime => {
        !anime.order ? anime.order = 0 : null

        // target 
        for (const property in anime.actions) {    
            anime.targets.forEach(target => {
                target.style[property] = anime.actions[property][0]
            });        
        }

    });

    params.animes.sort((a,b) => a.order - b.order)
}

function last(params, time, order, sameTime) {
    return params.last = {
        time: time,
        order: order,
        sameTime: sameTime
    }
}

function timeOut(animes, params){
    let time = 0
    let lastT = null
    if(animes.order != 0){
        if(params.last.order == animes.order){
            time = params.last.sameTime * 1000
        } else {
            time = params.last.time * 1000
        }
        lastT = params.last.time
    } 
    last(params, animes.time, animes.order, lastT)
    return time
} 

function events(params) {

    if(["click"].includes(params.event)){

        params.animes.forEach(animes => {

            if (!animes.jscode) {
                params.options.targets.forEach(target => {   
                    // listener 
                    target.addEventListener(params.event, function(e){

                        // child mode
                        if (animes.child === true) {
                            animes.targets = target.querySelectorAll(animes.targetName)
                        }
                        
                        // waitt order
                        setTimeout(function(){

                            transition(animes)
                            style(animes)

                        }, timeOut(animes, params))
                    })
                });
            } else {
                animes.jscode
            }
        });

    } 
}

function Magix(params) {

    // Prepare
    params.options.targets ? params.options.targets = targets(params.options.targets) : null
    animes(params)

    // Init
    init(params)

    // Event
    events(params)
}

module.exports.Magix = Magix;
