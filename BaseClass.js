class Baseclass{
    constructor(x, y, width, height, angle) {
        var options = {
         //   'restitution':1,
         //   'friction':15.0,
          //    'density':9.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      // this.image = loadImage("Arrow1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        strokeWeight(5);
    stroke("black");
      fill("red");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}