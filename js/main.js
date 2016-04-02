$(window).resize(resizeAndRedrawCanvas);
$(document).ready(resizeAndRedrawCanvas);

function resizeAndRedrawCanvas() {
    var desiredWidth = $(window).width();
    var desiredHeight = $(window).height();

    canvas.width = desiredWidth;
    canvas.height = desiredHeight

    view.viewSize = new Size(desiredWidth, desiredHeight);
    view.draw();
}

var pxRatio = window.devicePixelRatio;

// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites,
    Common = Matter.Common;

// engine = Engine.create(document.body);
engine = Engine.create({render: {visible: false}});

// init objects
var Objects = [];
var bodyOptions = {
  frictionAir: 0.001,
  friction: 0.8,
  restitution: 0.4,
  isStatic: false
};

// create rectangle
function addRectangle(x, y, w, h, isStatic){
  // matterjs
  bodyOptions.isStatic = isStatic;
  World.add(engine.world, Bodies.rectangle(x, y, w, h, bodyOptions));
  // paperjs
  return new Path.Rectangle({
  	point: [x, y],
  	size: [w, h],
    fillColor: new Color(Math.random(), Math.random(), Math.random(), 1)
  });
}
// create circle
function addCircle(x, y, r, isStatic){
  // matterjs
  bodyOptions.isStatic = isStatic;
  World.add(engine.world, Bodies.circle(x, y, r, bodyOptions));
  // paperjs
  var circle = new Path.Circle(new Point(x, y), r);
  circle.fillColor = new Color(Math.random(), Math.random(), Math.random(), 1)
  return circle;
}

function boundsCenter(minX, minY, maxX, maxY){
  return new Point((maxX + minX)/2, (maxY + minY)/2);
}

function addPath(vertices){
  var object = Matter.Body.create({
      position: Matter.Vertices.centre(vertices),
      vertices: vertices,
      isStatic: true,
      fillColor: new Color(Math.random(), Math.random(), Math.random(), 1)
  });
  Matter.World.add(engine.world, object);

  var path = new Path();
  for(i = 0; i < vertices.length; i++){
    path.add(new Point(vertices[i].x, vertices[i].y));
  }
  path.fillColor = new Color(Math.random(), Math.random(), Math.random(), 1);
  path.closed = true;

  return path;
}


// add random objects
for (var i = 0; i < 5; i++){
  random = Math.random() * 100;
  Objects.push(addRectangle(random + 300, random, random, random, false));
  Objects.push(addCircle(random + 300, random, random, false));
}

// add ground
Objects.push(addRectangle(canvas.width/pxRatio/2, canvas.height/pxRatio -10, canvas.width/pxRatio, 20, true));

function notInView(body, w, h){
  if(body.bounds.max.x < 0  || body.bounds.min.x > canvas.width/pxRatio){
      return true;
  }
  return false;
}

vertices= [{ x: 300, y: 300 }, { x: 270, y: 400 }, { x: 400, y: 400 }, {x:400, y:300}];
Objects.push(addPath(vertices));

vertices= [{ x: 600, y: 600 }, { x: 700, y: 700 }, { x: 800, y: 600 }];
Objects.push(addPath(vertices));


function onFrame(event) {
  for(it in engine.world.bodies){
    var body = engine.world.bodies[it];
    var render = Objects[it];

    bounds = body.bounds;
    render.position = boundsCenter(bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y);
    rotation = -(body.anglePrev - body.angle) * 180 / Math.PI;
    render.rotate(rotation);

    if(notInView(body)){
      World.remove(engine.world, body);
      Objects[it].remove();
      Objects.splice(it, 1);
    }
  }
}

// run the engine
Engine.run(engine);

function onMouseDrag(event) {
  random = Math.random() * 100;
  Objects.push(addRectangle(event.point.x, event.point.y, random, random, false));
  Objects.push(addCircle(event.point.x, event.point.y, random, false));
}
function onMouseDown(event) {
  random = Math.random() * 100;
  Objects.push(addRectangle(event.point.x, event.point.y, random, random, false));
  Objects.push(addCircle(event.point.x, event.point.y, random, false));
}
