setTimeout(()=>{
    console.log("JavaScript");
},2000);

setTimeout(() =>{
    console.log("Hello Eveyone");
},2000);

console.log("By");

//js contain only one thread
//here u can see set timeout two times as both will be executed
//js has single thread still both timeout will work because they depend upon browser not js
//wait is done by browser