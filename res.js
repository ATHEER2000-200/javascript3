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
const addNewUser = userIofo=>{
     let userAge = userIofo.age
     let abultAge;
     if(userAge >= 18){
      abultAge = `${userIofo.name} is an adult`

     } else {
        abultAge = `${userIofo.name} is not an adult`
     }
     return Promise.resolve(abultAge)
}
newuser
 .then(addNewUser)
.then(res=>{
console.log('**User info received**')
console.log(res)
})
