class Ball {
    constructor(x, y, radius) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'frictionAir':0.5,
          'slop': 1
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
     
      translate(pos.x, pos.y)
      rotate (angle)
      strokeWeight(5)
      stroke("white")
      rectMode(CENTER);
      fill("yellow");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };