console.log("Welcome Harish!!!")


//Stages of Promise
//1. Pending 2.Resolved 3.Rejected
// let promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve("Promise-1 is Success")
//     },6000) 
    
// })

// let promise2=new Promise((resolve,reject)=>{

//     reject("Promise-2 is Success")
// })

// let promise3=new Promise((resolve,reject)=>{    
//     resolve("Promise-3 is Success")
// })


// let promise4=new Promise((resolve,reject)=>{    
//     reject("Promise-4 is Success")
// })


// let promise5=new Promise((resolve,reject)=>{  
//     setTimeout(()=>{
//         resolve("Promise-5 is Success")
//     },3000)  
    
// })

//Promise Chain
// promise1
// .then((e)=>`${e} step-1`)
// .then((e)=>`${e} step-2`)
// .then((e)=>`${e} step-3`)
// .then((e)=>console.log(e))
// .finally(()=>console.log("Finally Block"))

// //Promise.all
// Promise.all([promise1,promise2,promise3,promise4,promise5])
// .then((e)=>console.log(e))
// .catch((err)=>console.error(err))

//Promise.any
// Promise.any([promise1,promise2,promise3,promise4,promise5])
// .then((e)=>console.log(e))
// .catch((err)=>console.error(err))

//Promise.allsettled
// Promise.allSettled([promise1,promise2,promise3,promise4,promise5])
// .then((e)=>console.log(e))
// .catch((err)=>console.error(err))

//Promise.race()
// Promise.race([promise1,promise2,promise3,promise4,promise5])
// .then((e)=>console.log(e))
// .catch((err)=>console.error(err))


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then((data)=>construct(data))
.catch((err)=>console.error(err))

var div= document.getElementById('root')
//console.log(div)

function construct(data){

    data.forEach((e)=> {
        let newtag= document.createElement('div')
        newtag.setAttribute('class',"card")
        newtag.innerHTML=`<img src="${e.flags.svg}" alt="${e.country}" class="card-image">
                    <div class="card-body">
                        <h3>${e.name.common}</h3>
                        <h4>${e.capital}</h4>
                    </div>`

        div.appendChild(newtag)
    
    })
}