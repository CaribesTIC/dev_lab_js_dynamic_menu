const Menu = (function() {
    let children = [], jsons = [], uls = [], lis = [];
    const Do = (function() {
        const doASpantNodo = function(tNodo, address) {
            const doA = function(address) {
                const obj = document.createElement("a");
                obj.setAttribute("href", address);
                obj.setAttribute("target", "_blank");
                return obj;
            }
            const doSpand = function(tNodo) {
                const obj = document.createElement("span");
                obj.appendChild(document.createTextNode(tNodo) );
                return obj;
            }
            const obj = doA(address);
            obj.appendChild(doSpand(tNodo));
            return obj;
        }
        return {
            liASpan: function(tNodo, address) {            
                const obj = document.createElement("li");
                obj.appendChild(doASpantNodo(tNodo, address));
                return obj;
            }
        }
    })();
    const childrenGet = function (jsons, paren) {
        return jsons.filter(json => json.id_parent == paren);
    }
    const process = function (num) {
         uls[num]  = document.createElement("ul");
         for (let i in children[num]) {
             lis[num] = Do.liASpan(children[num][i].title, children[num][i].path);
             children[num+1] = childrenGet(jsons, children[num][i].id);
             if (children[num+1])
                 process(num+1);            
             uls[num].appendChild(lis[num]);
         }
         if (num)
             lis[num-1].appendChild(uls[num]);        
    } 
    return { 
        make: function (arr) {
            jsons = arr;
            children[0] = childrenGet(jsons, 0);
            if (children[0])
                process(0);
            return uls[0];
        }
    }
})();


