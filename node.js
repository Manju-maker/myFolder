// let cleanRoom = function(){
//     return new Promise(function(resolve,reject){
//     let isClean = false;
//     if(isClean){
//         resolve('Clean');
//     }
//     else{
//         reject('Not Clean');
//     }
// });
// };
// cleanRoom().then(function(fromResolve){
//     console.log(' the room is '+fromResolve);
// }).catch(function(fromReject){
//     console.log(' the room is '+fromReject);
// });
//-----------------------------------------------------------

let registerManju = function(){
    return new Promise(function(resolve,reject){
        resolve("Manju is Registered");
    });
};

let gotBooks = function(message){
    return new Promise(function(resolve,reject){
        reject(message+" She dit not got the books");
    });
};

let getReady = function(message){
    return new Promise(function(resolve,rejecct){
        resolve(message+"And she is ready for the Class");
    });
};

// registerManju().then(function(fromResolve){
//     return gotBooks(fromResolve);
// }).then(function(fromResolve){
//     return getReady(fromResolve);
// }).then(function(fromResolve){
//     console.log("Finished " + fromResolve);
// });

Promise.race([registerManju(),gotBooks(),getReady()]).then(function(resolve,reject){
    console.log("One of them Finished");
}).catch(function(resolve,reject){
    console.log("Rejected");
})