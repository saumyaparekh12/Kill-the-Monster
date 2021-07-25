class Rope {
constructor(bodyA,pointB){
 var options={
bodyA:bodyA,
pointB:pointB,
length:350,
stiffness:0.4,

 }
 this.pointB=pointB;
this.chain=Constraint.create(options);
World.add(world,this.chain)
}
display(){
var pointA=this.chain.bodyA.position;
var pointB=this.pointB;
push();
strokeWeight(0)
stroke("Black");
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
}







}