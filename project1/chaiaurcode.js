const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    //but sunne wala bhi toh chahiye
    button.addEventListener('click', function(e){//click pe hi event listen hoga and uska naam humne e rakh diya 
        console.log(e)
        console.log(e.target)//jahan par click kiye hai bus vhi appear ho
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
       
    })
})