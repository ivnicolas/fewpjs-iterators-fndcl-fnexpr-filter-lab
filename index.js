// Code your solution here

function findMatching(drivers,name){
   return drivers.filter( n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers,letters){
    return drivers.filter( n => n.substring(0,2).toLowerCase() === letters.toLowerCase())
}

function matchName(drivers,name){
    return drivers.filter(n => n.name.toLowerCase() === name.toLowerCase())
}