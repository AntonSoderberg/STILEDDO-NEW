function pageLoad(){
    getAllGenres();
    getAllMoods();
    getAllInstruments();
}

window.onload = pageLoad;

function getAllGenres() {

    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            
            let request = JSON.parse(this.responseText)

            for (let i = 0; i < request.length; i++) {
                
                let container = document.getElementById("genre")

                let box = document.createElement("input")
                box.setAttribute("type", "radio")
                box.setAttribute("name", "genre")
                box.setAttribute("id", request[i])
                box.setAttribute("value", request[i])
                box.setAttribute("onchange", "genreTag(this.value)")
                
                let label = document.createElement("label")
                label.setAttribute("for", request[i])
                label.innerHTML = request[i] + "<br>"

                container.appendChild(box)
                container.appendChild(label)

            }
        }
    }

    xhttp.open("GET", "php/getGenres.php", true)
    xhttp.send()

}

function getAllMoods() {

    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            
            let request = JSON.parse(this.responseText)

            for (let i = 0; i < request.length; i++) {
                
                let container = document.getElementById("mood")

                let box = document.createElement("input")
                box.setAttribute("type", "radio")
                box.setAttribute("name", "mood")
                box.setAttribute("id", request[i])
                box.setAttribute("value", request[i])
                box.setAttribute("onchange", "moodTag(this.value)")
                
                let label = document.createElement("label")
                label.setAttribute("for", request[i])
                label.innerHTML = request[i] + "<br>"

                container.appendChild(box)
                container.appendChild(label)

            }
        }
    }

    xhttp.open("GET", "php/getMoods.php", true)
    xhttp.send()
    
}

function getAllInstruments() {

    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {

            let request = JSON.parse(this.responseText)

            for (let i = 0; i < request.length; i++) {
                
                let container = document.getElementById("instrument")

                let box = document.createElement("input")
                box.setAttribute("type", "radio")
                box.setAttribute("name", "instrument")
                box.setAttribute("id", request[i])
                box.setAttribute("value", request[i])
                box.setAttribute("onchange", "instrumentTag(this.value)")
                
                let label = document.createElement("label")
                label.setAttribute("for", request[i])
                label.innerHTML = request[i] + "<br>"

                container.appendChild(box)
                container.appendChild(label)

            }
        }
    }

    xhttp.open("GET", "php/getInstruments.php", true)
    xhttp.send()
    
}