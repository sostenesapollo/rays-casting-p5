let walls = []
let ray
let particle

let colors

function setup() {
   colors = [random(255), random(255), random(255), random(255), random(255)]
  createCanvas(400, 400);

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
    particle.look(walls)
  
}
