export function Reverse(input:Array<any>, isActive:boolean):Array<any> {
    if (isActive) {
        let ret = new Array;
        for(let i = input.length-1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    } else {
        return input;
    }
}

