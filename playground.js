let bgCol = 160;
let cBut, sqBut, relBut;

let circlesSet = [];
let squaresSet = [];

function setup(){
    createCanvas(windowWidth, windowHeight).id("pg");
    background(bgCol);
    cBut = createButton("Circle"); cBut.id("circle-btn");
    sqBut = createButton("Square"); sqBut.id("square-btn");
    relBut = createButton("Reload Page"); relBut.id('reload-btn');
}

function draw(){

    background(bgCol);
    ellipse(mouseX, mouseY, 50 * 2);

    cBut.mousePressed(function() {
       temp = new Circles; 
       circlesSet.push(temp);
    });

    sqBut.mousePressed(function() {
        temp = new Squares; 
        squaresSet.push(temp);
     });

    relBut.mousePressed(function() {
        location.reload();
     });


    for (let i = 0; i < circlesSet.length; i++)
        circlesSet[i].show();

    for (let i = 0; i < squaresSet.length; i++)
        squaresSet[i].show();
}

class Circles{
    constructor(){
        this.x = random(width);
        this.y = random(height);

        this.r = random(10, 50);

    }

    show(){
        ellipse(this.x, this.y, 2 * this.r);
    }


}

class Squares {
    constructor(){
        this.x = random(width);
        this.y = random(height);

        this.r = random(10, 50);

    }

    show() {
        rect(this.x, this.y, this.r, this.r);
    }
}