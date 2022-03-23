let gCount = 0
let gTag = ""
let mCount = 0
let mTag = ""
let iCount = 0
let iTag = ""
let offset = 0

function genreTag(str) {

    gCount = 1
    gTag = str
    offset = 0

    fetchMusic()

}

function moodTag(str) {

    mCount = 1
    mTag = str
    offset = 0

    fetchMusic()

}

function resetMood() {
    
    document.getElementById("mood").reset()

    mCount = 0
    mTag = ""
    offset = 0

    fetchMusic()

}

function instrumentTag(str) {

    iCount = 1
    iTag = str
    offset = 0

    fetchMusic()

}

function resetInstrument() {
    
    document.getElementById("instrument").reset()

    iCount = 0
    iTag = ""
    offset = 0

    fetchMusic()

}

function previousPage() {
    
    if (offset > 1) {
        
        offset -= 5
    
        fetchMusic()

        if (offset == 0) {
            
            document.getElementById("pPage").style.opacity = "0.5"

        }

    }
}

function nextPage() {
    
    offset += 5

    document.getElementById("pPage").style.opacity = "1"
    
    fetchMusic()

}

function fetchMusic() {

    let tagCount = gCount + mCount + iCount
    let data = [gTag, mTag, iTag, offset]

    let result = document.getElementById("result")

    if (tagCount > 0 && tagCount < 2 ) {

        let xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            result.innerHTML = this.responseText

        }
    }

    xhttp.open("GET", "php/getMusic1tag.php?data="+data, true)
    xhttp.send()

    }

    if (tagCount > 1 && tagCount < 3) {
        
        let xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            result.innerHTML = this.responseText

        }
    }

    xhttp.open("GET", "php/getMusic2tags.php?data="+data, true)
    xhttp.send()

    }

    if (tagCount > 2) {
        
        let xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            result.innerHTML = this.responseText

        }
    }

    xhttp.open("GET", "php/getMusic3tags.php?data="+data, true)
    xhttp.send()

    }

}