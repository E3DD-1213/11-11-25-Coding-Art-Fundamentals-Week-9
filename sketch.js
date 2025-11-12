function setup() 
{
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  background(180,100,70);
  noiseSeed(1);
  // noiseDetail(1, 0.25);
  frameRate(2);
}

function draw() 
{
  let xDis = windowWidth/5;
  let yDis = windowHeight/5;
  let xPos = [xDis, xDis*2, xDis*3, xDis*4];
  let yPos = [yDis, yDis*2, yDis*3, yDis*4];

  let dist = 25;

  for ( let j=0; j < 5; j++)
  {
      for (let i=0; i < 5; i++)
      {
        let col = 50*noise((i+1)*(j+1)*(frameCount));

        strokeWeight(0);
        fill(col,100,80);
        circle(xPos[i], yPos[j], dist);
      }
  }



}