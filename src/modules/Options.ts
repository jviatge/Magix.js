import { obj } from "../types";

/* CLICK */
export function toggleOut(obj:obj, event:Event, action:Function) {
    if (obj._toggle == 1) {
                 
        let contain: boolean = false

        obj._Allel.forEach(el => {
            el.forEach((element:any) => {
                if (element.contains(event.target)) {
                    contain = true
                }
            });
        });

        if (!contain) {
            action()
        }
    }
}