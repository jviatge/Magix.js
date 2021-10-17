import { Click, Hover, obj } from "../types";
import { click, hover } from "./Default";
import { Transition } from "./Transition";
import { Action } from "./Action";
import { Toggle } from './Toggle';
import { toggleOut } from "./Options";

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
                    // https://www.youtube.com/watch?v=55NsKxpUYjQ&t=123s
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

            target.addEventListener("mouseover", (e: any) => {
                this.action(options)
            });

            target.addEventListener("mouseout", (e: any) => {
                this.action(options)
            });

        });
        
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
        Toggle(this.obj)
    }

}




