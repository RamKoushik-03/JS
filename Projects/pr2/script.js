const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(height);
    const heigh = height/100;
    const res = (weight/(heigh * heigh)).toFixed(2);
    const result = document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height))
    result.innerHTML = "Provide valid inputs"   
    else if(weight == '' || weight < 0 || isNaN(weight))
    result.innerHTML = "Provide valid inputs"
    else result.innerText = `Result = ${res}`;
});