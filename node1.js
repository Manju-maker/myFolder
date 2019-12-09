console.log('Person1: show Ticket');
console.log('Person2: show Ticket');
const preMovie = new Promise(function(resolve,reject){
    resolve('Person 3 Got Ticket');
}) ;
preMovie.then(function(fromResolve){
    console.log(fromResolve);
});
console.log('Person4: show Ticket');
console.log('Person5: show Ticket');

const  myMovie = async () =>{
    const myPromise = new Promise((resolve, reject) =>{
        setTimeout(()=>resolve('Ticket'),500);

    });
    let ticket 
    try{
        ticket = await myPromise;
    }
    catch(e){
        console.log('sad face');
    }
    return ticket;
}

myMovie().then((m)=>console.log(m));
const postMovie = new Promise(function(resolve,reject){
    resolve('Person 6 got Ticket');
});
postMovie.then(function(fromResolve){
    console.log(fromResolve);
});