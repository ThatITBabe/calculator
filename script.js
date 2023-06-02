let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button")
let powerSwitch = document.getElementById('powerSwitch');
let display = document.getElementById('inputBox');
let isCalculatorOn = false;

function toggleCalculator() {
    isCalculatorOn = powerSwitch.checked;
    if (isCalculatorOn) {
        display.textContent = '0';
    } else {
        display.textContent = '';
    }
}

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
            string = Math.sqrt(string);
            input.value = string
        }
        else if (e.target.innerHTML == 'Sq') {
            string = string * string
            input.value = string
        }
        else if (e.target.innerHTML == '+/-') {
            if (string.startsWith("-")) {
              string = string.slice(1); // Remove the negative sign
            } else {
              string = "-" + string; // Add the negative sign
            }
            input.value = string;
          }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

