var dO = document.getElementById("dArea").innerText
var globalLyScopedStringDA = ""
function adderDA(str){
    globalLyScopedStringDA+=str
}
function displayOut(num){
    adderDA(num)
    document.getElementById("dArea").innerText = globalLyScopedStringDA
    // if we add this right here then the loop will run everytime the user presses a button this should'nt be the case
    // what we can do instead is we can make this loop run in the operators button or wont allow the user to press another operators through if
}
function operatorCond(op){
    // we need to add the condition here first
    // also check if there is something before the operator
    // how to solve this problem that is we have to check if there's a number before the operator

    let lastIndex = globalLyScopedStringDA.length - 1
    let lastChar = globalLyScopedStringDA[lastIndex]
    if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
        alert("abe Chutiye")
    }else{
        displayOut(op)
    }
}
function delAll(){
    document.getElementById("dArea").innerText = "Enter"
    // why this aint working mate find out why and this is just work around rn this is another problem that we have to deal with
    globalLyScopedStringDA = ""
}

// the solution from here is easy what you do is concatinate the string and just that when the user presses the = button send this string to a function that traverses the string and from there use specific functions to give back the output

// alright the solution okay the solution that i have in my mind is:

// version-1: we have to output whatever the user is inputting alright

// problems
// 1. add logic to the calc that it shouldnt accept two operators continously the syntax should always be operand operator operand
    {
        // probable solution: create a filter function that checks each entry
    }
// 2. We have to solve the problem that the first input shouldnt be an operator