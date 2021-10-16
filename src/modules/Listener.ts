import { obj } from "../types";
import { Transition } from "./Transition";
import { Action } from "./Action";
import { Toggle } from './Toggle';

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
        
        this.obj._target.forEach((target:any) => {
            
            target.addEventListener('click',(e: any)=>{ 
               this.action()
            })
        });
    }

    // Hover
    private hover(){
        
        this.obj._target.forEach((target:any) => {

            target.addEventListener("mouseover", (e: any) => {
                this.action()
            });

            target.addEventListener("mouseout", (e: any) => {
                this.action()
            });

        });
        
    }

    private action(){

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




