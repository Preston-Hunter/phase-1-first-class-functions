
function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return (function baseball(){console.log("baseball")});
}

function returnsAnAnonymousFunction(){
    return (function (){console.log("anonymous baseball")});

}

