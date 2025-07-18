const changeColors = function(){
        const hex = '0123456789ABCDEF';
        let color = '#'
        for(let i=0;i<6;i++) {
            let idx = Math.round(Math.random() * 16)
            color += hex[idx]
        }
        document.querySelector('body').style.backgroundColor = color;
    }

    let tt
    document.querySelector('#start').addEventListener('click', function(){
        if(!tt)
        tt = setInterval( changeColors, 1000);
    })

    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(tt);
        tt = null;
    }) 