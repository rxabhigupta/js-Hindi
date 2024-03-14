const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

//jab tak humara program chlege ye tab tak run karwata hai
setInterval(function(){}, 1000)