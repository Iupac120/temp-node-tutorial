
const {readFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile) 
const getText = (path) =>{
   return new Promise((reject,resolve)=>{
       readFile(path,'utf8',(err,data)=>{
           if(err){
               reject(err)
           } else{
               resolve(data)
           }
       })
   })
}

getText('./content/first.txt').then(result => console.log(result)).catch(err=>console.log(err))

const start=()=>{
   try {
       const first = await getText('./content/first.txt')
       console.log(first)
   }catch (error){
       console.log(error)
   }
}
start()