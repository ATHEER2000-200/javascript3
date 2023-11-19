function replace (){
    let searchText = document.getElementById("search").va
    let replacetext = document.getElementById("replace").va

    let text =  document.getElementById("text").innerHTML
    let newtext = document.getElementById("text")
    let reg = new RegExp(searchText,'gi')
     text =text.replace(reg,replacetext)
     newtext.innerHTML=text  
}