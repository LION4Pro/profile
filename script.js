let text = "Hi` I AMIRALI  a WEB DEVELOPER"
let speed = 50
let i = 0

const AtTyping = () => {

    if(i < text.length) {

        document.getElementById("At").innerHTML += text.charAt(i)
        i++
    }
}


setInterval(AtTyping , speed)
