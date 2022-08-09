function spy(){

}
function receivesAFunction(spy){
    return spy();
}
let spies = receivesAFunction
function returnsANamedFunction(beforeall){
   return spies;
}

function returnsAnAnonymousFunction(beforeall){
    return () => {}
}