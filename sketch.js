let walls = []
let ray
let particle

const sceneW = 400
const sceneH = 400

function setup() {
  createCanvas(800, sceneW);

  // World 
  walls.push(new Wall(0, 0, sceneW, 0))
  walls.push(new Wall(sceneW, 0, sceneW, sceneH))
  walls.push(new Wall(sceneW, height, 0, sceneH))
  walls.push(new Wall(0, height, 0, 0))

  walls.push(new Wall(150, 150, 150, 170))
  walls.push(new Wall(150, 170, 170, 170))
  walls.push(new Wall(150, 150, 170, 150))
  walls.push(new Wall(170, 150, 150, 170))
  
  
  particle = new Particle()
}


function keyPressed() {
  if(key == 'a'){
    particle.rotate(0.1)
  }
  if(key == 'd'){
    particle.rotate(-0.1)
  }
}

function draw() {
  background(0);
  for(let wall of walls) {
    wall.show()
  }

  particle.update(mouseX, mouseY)
  particle.show()
  const scene = particle.look(walls)

  const w = sceneW / scene.length
  push()
  translate(sceneW, 0)
  for(let i=0;i<scene.length;i++) {
    noStroke()
    const b = map(scene[i], 0, sceneW, 255, 0)
    const h = map(scene[i], 0, sceneW, sceneH, 0)
    fill(b)
    rectMode(CENTER)
    rect(i*w+w/2, sceneW/2, w, h)
  }
  pop()
  
}
