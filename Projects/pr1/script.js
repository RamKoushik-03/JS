const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (val)=> {
    val.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    });
});