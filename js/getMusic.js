var gCount = 0
var gTag = ""
var mCount = 0
var mTag = ""
var iCount = 0
var iTag = ""

function genreTag(str) {

    gCount = 1
    gTag = str

    fetchMusic()

}

function moodTag(str) {

    mCount = 1
    mTag = str

    fetchMusic()

}

function resetMood() {
    
    document.getElementById("mood").reset()

    mCount = 0
    mTag = ""

    fetchMusic()

}

function instrumentTag(str) {

    iCount = 1
    iTag = str

    fetchMusic()

}

function resetInstrument() {
    
    document.getElementById("instrument").reset()

    iCount = 0
    iTag = ""

    fetchMusic()

}

function fetchMusic() {

    let tagCount = gCount + mCount + iCount
    let data = [gTag, mTag, iTag]

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