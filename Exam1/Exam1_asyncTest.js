//Async Function
//we put a time counter that will start at 0 and end in the end of the func
var starTime ,Atimer ,timeleft;
async function startA(){
    
    console.log("Async Start...")
     
    starTime = Number (new Date().getTime());
     return new Promise( resolve => {
         setTimeout(function (){
            resolve("async")
            console.log("Async Done!")
        },6000)
     })
}

//  Sync Function
function startS(){
    console.log("Sync Start...")
    return new Promise(resolve =>{
        setTimeout(function () {
            resolve("sync")
            console.log("Sync Done!")
            timeleft = Number((new Date().getTime()))
            console.log('Time left of the Asynchronous func after the Synchronous func has ended is: '+Number((6) - Math.abs((starTime - timeleft)/1000)))
        },4000)

    })
    
}

startS()

startA()

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function(req,res){
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify( {a:1}, null, 3));
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
