let walls = []
let ray
let particle

let colors

const sceneW = 400

function setup() {
   colors = [random(255), random(255), random(255), random(255), random(255)]
  createCanvas(800, sceneW);

  for(let i = 0; i< 5; i++) {
    walls[i] = new Wall(random(height),random(height),random(height/2),random(height/2))
  }
  
  particle = new Particle()
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
    fill(scene[i])
    rect(i*w, 0, -i, height)
  }
  pop()
  
}
