var dO = document.getElementById("dArea").innerText
function displayOut(num){
    document.getElementById("dArea").innerText = String(num)
    console.log(num+typeof(String(num)))

}

// the solution from here is easy what you do is concatinate the string and just that when the user presses the = button send this string to a function that traverses the string and from there use specific functions to give back the output