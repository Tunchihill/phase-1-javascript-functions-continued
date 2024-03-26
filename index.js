 // code your solution here
console.log(saturdayFun("bathe my dog"));
console.log(saturdayFun());
 
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
 
 
let mondayWork = function(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
console.log(mondayWork());
 

let wrapAdjective = function(kdot="*"){
    return function(wish="special"){
        return(`You are ${kdot}${wish}${kdot}!`)
    }
}
console.log(wrapAdjective()("a hard worker"));
console.log(wrapAdjective()("||a dedicated programmer||"))