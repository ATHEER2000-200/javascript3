console.log('Start')
 
let newuser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userIofo ={
            name: 'khalid',
            age: 19
        }
        resolve(userIofo)
    }, 3000);
})
newuser.then(res=>{
console.log('**User info received**')
console.log(res)
})
console.log('End')