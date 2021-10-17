import { Click, Hover, Scroll, obj } from "../types";
import { click, hover, scroll } from "./Default";
import { Transition } from "./Transition";
import { Action } from "./Action";
import { Toggle } from './Toggle';
import { toggleOut } from "./Options";
import { Play } from "./Play";

export class Listener{

    public obj:obj

    constructor(obj :obj){

        this.obj = obj
        this.create()
    }

    private create(){

        // list targets   
        switch (this.obj.event) {

            case 'click':
                this.click()
                break;
    
            case 'hover':
                this.hover()
                break;
    
            case 'key':
                break;
    
            case 'scroll':
                this.scroll()
                break;
        }

    }

    // Click
    private click(){

        // get options
        let options:Click = click(this.obj.click)
        
        this.obj._target.forEach((target:any) => {

            target.addEventListener('click',(e: any)=>{ 
                this.action(options)
             })

            /** OPTION */
            if (options.toggleOut) {
                document.addEventListener('click', (event) => {
                   toggleOut(this.obj, event,() => {
                        this.action(options)
                   })
                });
            }

        });
    }

    // Hover
    private hover(){

        // get options
        let options:Hover = hover(this.obj.hover)
        
        this.obj._target.forEach((target:any) => {

            target.addEventListener("mouseover", (e: Event) => {
                this.action(options)
            });

            target.addEventListener("mouseout", (e: Event) => {
                this.action(options)
            });

        });
        
    }

    // Scroll
    private scroll(){

        // get options
        let options:Scroll = scroll(this.obj.scroll)

        window.addEventListener('scroll', (e: Event) => {
            this.action(options)
        })
        
    }

    private action(options:Object){

        // init order
        this.obj._lastorder = this.obj.animes[0].order
               
        // play anime transition / action
        this.obj.animes.forEach(anime => {     
            Transition(anime)
            Action(anime, this.obj)                
        })

        // toogle end 
        this.obj.event != 'scroll'? Toggle(this.obj):this.obj._toggle =1

    }

}




