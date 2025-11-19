/*
set variables by names and call them by id so you can use them
then make an array to store the variables and can cycle through them
*/
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let start = document.getElementById("start_btn");
let stop = document.getElementById("stop_btn");

let light_arr = [red, yellow, green];

/*
this function will help keep the lights turned off
*/
function on_off() {
    for (let i = 0; i < light_arr.length; i++) {
        light_arr[i].style.opacity = "0.3";
    }
}

// this will help the cycle tell if the lights are on or off
let isRunning = false;      // true = lights are cycling
let timeoutId = null;       // stores id returned by setTimeout
const delay = 1200;         // delay between lights in ms

/*
helps moving forward the list from red to green back to red
start with 0 (red)
advance and once you hit the "length" stop and go back to 0
*/
let current_index = 0;
function advance_light() {
    current_index = current_index + 1;
    if (current_index >= light_arr.length) {
        current_index = 0;
    }
}

/*
this will cycle through the lights once start is clicked
using time out
*/
function run_cycle() {
    // if someone pressed stop, do nothing
    if (!isRunning) {
        return;
    }

    // first turn all lights off
    on_off();

    // then turn the current light on
    light_arr[current_index].style.opacity = "1";

    // prepare index for the next round
    advance_light();

    // ask the browser to call this function again after "delay" ms
    timeoutId = setTimeout(run_cycle, delay);
}

/*
start button functionality
syntax for addEventListener(type, listener, options)
the type here is click and the listener is an anonymous function
that starts the cycle when the button is clicked
*/
start.addEventListener("click", function () {
    // if it is already running, do not start a second timer
    if (isRunning) {
        return;
    }

    isRunning = true;
    current_index = 0;   // always start from red
    run_cycle();         // kick off the cycle once
});

/*
this adds the functionality for the stop button
it stops the timeout and turns all lights off
*/
stop.addEventListener("click", function () {
    // if it is not running, there is nothing to stop
    if (!isRunning) {
        return;
    }

    isRunning = false;

    // cancel the next scheduled run_cycle call
    clearTimeout(timeoutId);
    timeoutId = null;

    // keep everything off when stopped
    on_off();
});
