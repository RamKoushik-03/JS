const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerText = `Time is ${date.toLocaleTimeString()}`
}, 1000)