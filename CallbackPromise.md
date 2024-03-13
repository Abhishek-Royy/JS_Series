- Async-Await
- promise-chain
- callback-hell

There are two kind of JS functions:-
                    Synchronous 
                    Asynchronous
    In programming we mosty used Asynchronous functions. It does not wait for the previouse code execution.


`CALLBACK HELL`
    Nested callbacks stacked a problem of one another pyramid structure. This type of programming become difficult to manage and understand.

** To  avoid 'Callback Hell' problem, we use `Promises`.
    - Promise:
        It is an object in JS, It is a solution of Callback Hell.
        Promises has two handelers:- resolve, reject.
    syntax:-  let promise=new Promise((resolve,reject)=>{....})   
        Promise has total 3 kind of state:-
            pending state
            fullfil state(resolve)
            reject state


** We use `.then` with promise - if it is success
    promise.then((res)=>{

    })

** We use `.catch` with promise - if it is error
    promise.catch((err)=>{

    })

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
`ASYNC-AWAIT`
    async function always return - a promise.
    await pushes the execution of its surrounding async function untill the promise is settled.


____________________________________________________________
`IIFE`(Immediately Invoked Function Execution)
    *Process 1
        (function(){
            //Code
        })();

    *Process 2
        (()=>{
            //code
        })()

    *Process 3
        (async()=>{
            //code
        })()