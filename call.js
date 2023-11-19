console.log('Start')
function userIofo(name,callback){
    setTimeout(()=>{
        console.log('**User info received**')
        callback(name)
    }, 3000 ) 
}
let userName = userIofo('khalid', name=>{

    console.log(`Your name is ${name}`)

})
console.log('End')