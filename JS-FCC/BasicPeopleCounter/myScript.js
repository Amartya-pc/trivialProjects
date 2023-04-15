document.getElementById("count").innerText = 0
document.getElementById("pE").innerText = ""
let x = Number(document.getElementById("count").innerText)

function clicked() {
    x += 1
    document.getElementById("count").innerText = x
}

function save() {
    if (Number(document.getElementById("count").innerText) != 0) {
        document.getElementById("pE").innerText+= document.getElementById("count").innerText + "-"

        // reset the counter
        document.getElementById("count").innerText = 0
        x = 0
    }

}