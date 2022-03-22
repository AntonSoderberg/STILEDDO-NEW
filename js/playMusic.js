let audio = ""
let x = 0
let currentAudio = ""

function playPause(i, ii) {

    x++

    switch (x) {
    
        case 1:

        audio = new Audio("music/" + ii + ".mp3")
        audio.play()
        audio.volume = 0.4
        
        break;

        case 2:

        audio.pause()

        x = 0

        break;

    }

    currentTime(i)

}

function currentTime(i) {
    
    if (!audio.paused) {
        let playLine = document.getElementById("playLine" + i)

        setTimeout(() => {
            
            playLine.style.width = audio.currentTime / audio.duration * 100 + "%"

            currentTime(i)

        }, 10);

    }

}