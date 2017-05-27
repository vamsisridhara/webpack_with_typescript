import * as $ from "jquery";
//declare let $: any;
//import $ = require("jquery");
export class JqueryTestNumbers {
    constructor() { }
    getObjectArray(): any {
        let ObjArr = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }];
        return $.map(ObjArr, function (n, i) {
            return [n.a, n.b];
        });
    }
}