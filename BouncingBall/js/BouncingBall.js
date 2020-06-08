/*

    N220 Section 25750
    Harmanjot Singh
    Animation
    24 January 2020

*/

// object to store position values
let position = {
    // set x
    x : 45,
    // set y
    y : 100
};

// object to store speed values
let speed = {
    // set x speed
    speedX : 5,
    // set y speed
    speedY : 5
};

// object to store the diameter value
let diameter = {
    // set d
    d : 50
}

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
    circle(position.x, position.y, diameter.d * 2);
    // keep adding speed to the current value of x position
    position.x += speed.speedX;
    // keep adding speed to the current value of y position
    position.y += speed.speedY;
    // keep the ball bouncing from left and right side
    if (position.x > width - diameter.d || position.x < diameter.d) {
        // change the direction of the ball
        speed.speedX = -speed.speedX;
    }
    // keep the ball bouncing from top and bottom side
    if (position.y > height - diameter.d || position.y < diameter.d) {
        // change the direction of the ball
        speed.speedY = -speed.speedY;
    }
    
}