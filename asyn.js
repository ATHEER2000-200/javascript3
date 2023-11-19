console.log('Start')
function userIofo(name){
    setTimeout(()=>{
        console.log('**User info received**')
        return name
        
    }, 3000 ) 

}
let userName = userIofo('khalid')
console.log(userName)
console.log('End')