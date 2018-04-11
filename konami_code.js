const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  // Write your JavaScript code inside the init() function
let index = 0
const body = document.querySelector('body')
 
<<<<<<< HEAD
body.addEventListener('keydown', listener)
=======
body.addEventListener('keydown', listener())
>>>>>>> 732b8e64b92de6eac59d3eb8b7e878fdd59286d3

function listener(e){
  
const key = parseInt(e.detail || e.which)


if (key === code[index]){
  
  index++
  if (index === code.length){
    
    alert("Nicely Done!")
    index = 0
    
  }

  }else{
  
  index = 0

}

}

}