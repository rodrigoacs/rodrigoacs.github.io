function rgbOn() {
    document.getElementById('rgbOn').disabled = true
    let i = 0
    setInterval(() => {
        document.body.style.setProperty('--color', `hsl(${i},100%,50%)`)
        i++
        if (i == 360) i = 0
    }, 10);
}

