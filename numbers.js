let zero, one, two, three, four, five, sex, seven, eight, nine = "";

zero = "0" ;
one = "1";
two = "2";
three = "3";
four = "4";
five = "5";
sex = "6";
seven = "7";
eight = "8";
nine = "9";

let mathString = ""

function myFunction0() {
    mathString += zero
    document.getElementById("DisplayNumber").value = mathString;}

function myFunction1() {
    mathString += one
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction2() {
    mathString += two
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction3() {
    mathString += three
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction4() {
    mathString += four
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction5() {
    mathString += five
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction6() {
    mathString += sex
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction7() {
    mathString += seven
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction8() {
    mathString += eight
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction9() {
    mathString += nine
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction10() {
    mathString += "+"
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction11() {
    mathString += "-"
    document.getElementById("DisplayNumber").value = mathString;
}
function myFunction12() {
    mathString += "/"
    document.getElementById("DisplayNumber").value = mathString;
}

function myFunction13() {
    mathString += "*"
    document.getElementById("DisplayNumber").value = mathString;
}

/*function myFunction14() {
    mathString.substring(mathString.length - 0);
    document.getElementById("DisplayNumber").value = mathString;
}*/

function myFunction14() {
    mathString = ""
    document.getElementById("DisplayNumber").value = mathString;
}


    document.addEventListener("click", function(event)
    {
        if (event.target.value == "=") 
        {
            document.getElementById("DisplayNumber").value = eval(mathString)
            return mathString = eval(mathString)

        }
        
    })



document.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
        return document.getElementById("DisplayNumber").value = eval(mathString)
    
    if(event.key == "+") mathString += "+"
    if(event.key == "-") mathString += "-"
    if(event.key == "/") mathString += "/"
    if(event.key == "/") mathString += "*"
    
})

document.addEventListener("change", function(event) {

})
