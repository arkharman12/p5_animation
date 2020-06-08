/*

    N220 Section 25750
    Harmanjot Singh
    Animation
    24 January 2020

*/

// object to store position values
let position = {
    // set x postion
    x : 200,
    // set y position
    y : 200
};

// create a canvas
function setup() { 
    // set the width and height
    createCanvas(800, 600);
} 

// start drawing
function draw() {
    // set the background color
    background("lightgray");
    // make the ball black
    fill(0);
    // set the coordinates and diameter for the circle
    circle(position.x, position.y, 100);

    // if x coordinate is greater than or equal to 800
    if (position.x >= 800) {
        // bring the circle back to 0 
        position.x = 0;
    // if x coordinate is less than or equal to 0 (blocking it from going out of canvas size)
    } else if (position.x <= 0) {
        // stay at positon 0
        position.x = 0;
    }

    // if y coordinate is greater than or equal to 600
    if (position.y >= 600) {
        // bring the circle back to 0
        position.y = 0;
    // if y coordinate is less than or equal to 0 (blocking it from going out of canvas size)
    } else if (position.y <= 0) {
        // stay at positon 0
        position.y = 0;
    }
 
}

// perform some function when a key is pressed
function keyPressed() {
    // if left arrow is pressed
    if (keyCode == LEFT_ARROW) {
        // go to left by 20
        position.x = position.x - 20;
    // if right arrow is pressed
    } else if (keyCode == RIGHT_ARROW) {
        // go to right by 20
        position.x = position.x + 20;
    }

    // if up arrow is pressed
    if (keyCode == UP_ARROW) {
        // go up by 20
        position.y = position.y - 20;
    // if down arrow is pressed
    } else if (keyCode == DOWN_ARROW) {
        // go down by 20
        position.y = position.y + 20;
    }
  
}