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
                    break;
        
                case 'key':
                    break;
        
                case 'scroll':
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




