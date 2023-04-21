var globalStringDA = ""
var cleanSheet = ""
var array = []

function converter() {
    let s = 0
    let e = 0
    let lenGDA = globalStringDA.length - 1
    for (let i in globalStringDA) {
        if (globalStringDA[i] == "+" || globalStringDA[i] == "-" || globalStringDA[i] == "*" || globalStringDA[i] == "/") {
            e = Number(i)
            arrayFeeder(globalStringDA.slice(s, e))
            arrayFeeder(globalStringDA[i])
            s = e + 1
        } else if (i == lenGDA) {
            // that is when the string ends provide the operand to the array
            e = Number(i)
            arrayFeeder(globalStringDA.substring(s))
            // console.log("here in the elseif")
        }
    }
    console.log(array.join(" "))
}

function arrayFeeder(x) {
    array.push(x)
}

function finalCalc(){
    for (let j in array) {
        console.log(array[j])
    }
}

function calc() {
    let lastChar = globalStringDA[(globalStringDA.length - 1)]
    if (globalStringDA == "") {
        alert("Invalid syntax: There's Nothing to Calculate")
    } else if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        alert("Invalid syntax: An operator couldn't be the last character")
        // feature: in any future version of this calculator make it merciful that the calculator ignores the syntax and makes sense of whatever is given to it
    } else {
        converter()
        // displayOut(finalCalc())
    }
    displayOut("Answer"+finalCalc())
}

function stringCon(xStr) {
    //    create an operator Condition
    if (xStr == "+" || xStr == "-" || xStr == "*" || xStr == "/") {
        // that is xStr is an operator
        if (opCond()) {
            //if opCond is true or the syntax of the question is valid
            strAdderMain(xStr)
            displayOut(globalStringDA)
        } else if (!(opCond())) {
            // opCond is false or the syntax is wrong
            alert("Wrong Syntax")
        }
    } else {
        strAdderMain(xStr)
        displayOut(globalStringDA)
    }

}

function opCond() {
    let lastChar = globalStringDA[globalStringDA.length - 1]
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == "") {
        return false;
    } else {
        return true;
    }

}
function strAdderMain(x) {
    globalStringDA += x
}
function displayOut(n) {
    document.getElementById("dArea").innerText = n
}

function delAll() {
    globalStringDA = ""
    displayOut("Enter")
    array = []
}


// problems
// 1. The div collapses when we put globalStringDA = "" to displayOut the enter wala condition fix that find a way that the div remains constant and doesnt change
// 2. Splice karu agar operator dekh ke toh karu kaise 
// 3. This is not the most efficent of solving these problems but yeah we'd make it efficent in version-2