//Create P5-WEBGL canvas
p = new P5( {height: window.innerHeight, width: window.innerWidth, mode:  "WEBGL"})

// Define local variables
p.angle = 0.3
p.orientation = -1.

//Load model
model=p.loadModel(atom.project.getPaths()+"/models/headhead.obj",true)

p.draw = () => {
  p.background(0);
  p.ambientLight(200,80,30);
  p.ambientMaterial(250);
  p.directionalLight(70, 250, 200, 0, -2.5,-1.2);
  p.translate(p.orientation*200,20, 0);
  p.rotateY(1.2*p.angle);
//  p.rotateZ(p.angle * 0.7);
  p.rotateX(91);
  p.scale(5,5,5)
  p.angle += 0.00001
  p.model(model);
}
p.hide()

s0.init({src: p.canvas})

face = () => src(s0).scrollX(-0.15)
pix = 2
face().diff(face().scale(0.99)).posterize(10)
.color(0.4,.6,0.7).hue([0.8,0.7,0.5].ease())
.colorama([0.1,0.2,0.1].ease()).luma(0.3,0.3)
.out()
