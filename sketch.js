//ADD names of group members at top of sketch 
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
// Added let to variable declaration //
// removed unused variables //
let circles = [];

let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  // Added value to hot ping RGB
  [255, 105, 180], // hot pink 
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
  // Changed media to medias, removed capitalization of Nyan
   nyan = await createAudio('medias/nyanCat.mp3');
  noNyan = await loadImage('medias/nyancatless.gif');
  // Removed sprinkles //
  // sprinkles = await loadImage('medias/sprinkles.jpg'); 
 
}

function draw() {
  // moved noNyan to draw function //
  background(noNyan);
  
  // Draw all circles
  // circles is misspelled //
  for (let circle of circles) { 
    // change to circle color //
    fill(circle.color); 
    // ellipse is spelled wrong //
    ellipse(circle.x, circle.y, 50, 50); 
  }
  
  // remove mouseIsPressed (done in function below) //
  if (mouseIsPressed) {
    let c = random(colors); 
    // Removed spacing between newCircle //
    let newCircle = { 
      x: mouseX, 
      y: mouseY,
      // changed colors to color //
      color: color(c[0], c[1], c[2]) 
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  mouseIsPressed = true;
  // misspelled nyan //
  // change to volume //
  nyan.play();
  nyan.volume(0.1); 
  // playback misspelled //
  nyan.speed(playbackRate); 
  nyan.loop();
  
}
function mouseReleased(){
  nyan.stop();
  // Added End Curly Bracket //
}


function keyPressed() {
  // c in keyCode needs to be capitalized //
  // triple equal for all conditions //
  // removed semmicolon after if //
  // changed rate to speed //
  if (key === UP_ARROW) { 
    // playbackrate misspelled //
    playbackRate += 0.1; 
    nyan.speed(playbackRate); 
    // add if //
    // down arrows needs to be all caps //
  } else if (key === DOWN_ARROW) { 
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.speed(playbackRate);
  } else if (key === LEFT_ARROW) { 
    // set playback rate to default //
    playbackRate = 1; 
    // playback rate misspelled //
    nyan.speed(playbackRate); 
  }
}
// Removed Extra Curly Brackets //