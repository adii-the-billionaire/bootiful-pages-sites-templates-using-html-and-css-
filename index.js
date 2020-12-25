window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound") //using of class nd id is so different so let's check this again man
    const pads = document.querySelectorAll(".pads div")


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].play()
        })
    })
})
//understanding the weird part of the bubble nd what the use 