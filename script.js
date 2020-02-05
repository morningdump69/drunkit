let boom = new Audio("sounds/boom.wav")
let clap = new Audio("sounds/clap.wav")
let hihat = new Audio("sounds/hihat.wav")
let kick = new Audio("sounds/kick.wav")
let openhat = new Audio("sounds/openhat.wav")
let ride = new Audio("sounds/ride.wav")
let snare = new Audio("sounds/snare.wav")
let tink = new Audio("sounds/tink.wav")
let tom = new Audio("sounds/tom.wav")

document.addEventListener("keypress",(event)=>{

    switch (true) {
        case event.code == "KeyA":
            
            boom.pause()
            boom.currentTime = 0
            boom.play()
        break
        case event.code == "KeyS":
            
            clap.pause()
            clap.currentTime = 0
            clap.play()
        break
        case hihat.code == "KeyD":
            
            hihat.pause()
            hihat.currentTime = 0
            hihat.play()
        break
        case event.code == "KeyF":
            
            kick.pause()
            kick.currentTime = 0
            kick.play()
        break
        case event.code == "KeyG":

            openhat.pause()
            openhat.currentTime = 0
            openhat.play()
        break
        case event.code == "KeyH":
            
            ride.pause()
            ride.currentTime = 0
            ride.play()
        break
        case event.code == "KeyJ":

            snare.pause()
            snare.currentTime = 0
            snare.play()
        break
        case event.code == "KeyK":
            
            tink.pause()
            tink.currentTime = 0
            tink.play()
        break
        case event.code == "KeyL":
            
            tom.pause()
            tom.currentTime = 0
            tom.play()
        break
    }
})

