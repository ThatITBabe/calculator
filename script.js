let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button")

let string = ""
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // else if (e.target.innerHTML == 'On/Off') {
        //     isOn = !isOn; // Toggle the state
        //     input.disabled = !isOn; // Disable or enable the input based on the state
        //     if (!isOn) {
        //       string = "";
        //       input.value = string;
        //     }
        // }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string
        }
        else if (e.target.innerHTML == 'Sqrt') {
            var number = parseFloat(string);
            var result = Math.sqrt(number);
            input.value = result;
        }
        else if (e.target.innerHTML == 'Sq') {
            var number = parseFloat(string);
            var result = (number * number);
            input.value = result;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

// function square() {
//     var number = parseFloat(document.getElementById("inputBox").value);
//     var result = number * number;
//     document.getElementById("result").innerHTML = "Result: " + result;
//   }

// function squareRoot() {
//     var number = parseFloat(document.getElementById("inputBox").value);
//     var result = Math.sqrt(number);
//     document.getElementById("result").innerHTML = "Result: " + result;
//     input.value = string;
// }