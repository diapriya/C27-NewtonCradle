/*class Rope{
constructor(bodyA,bodyB){
    
    //this.offsetX=offsetX
    //this.offsetY=offsetY

var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.004,
    length:10,
    pointB:{x:this.offsetX, y:this.offsetY}
}

this.rope = Constraint.create(options);
World.add(world,this.rope);

}

display(){
   
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);

var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY


line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
line (pointA.x,pointA.y,pointB.x,pointB.y);

}

}
*/
class Rope{
  
    constructor(body1,body2,offsetX,offsetY){

      this.offsetX=offsetX;
      this.offsetY=offsetY;
      this.bodyA = body1;
      this.bodyB =  body2;
 

      var options={ 
          stiffness: 0.04,
          length: 10,
          pointB: {
            x: this.offsetX, 
            y: this.offsetY
          }
      }

      

      this.body = Bodies.rectangle(body1.position.x, body1.position.y, body1.position.x, body2.position.y);

      var constraint = Constraint.create({
        pointA: { x: body1.position.x, y: body1.position.y },
        bodyA: this.body1,
        bodyB: this.body2,
        pointB: { x: body2.position.x, y: body2.position.y  }
    }); 

      World.add(world,[ this.body, constraint]);
    }
  
  display(body1,body2){
   

    strokeWeight(2);

  //  console.log(pointA);

    line(body1.position.x, body1.position.y, body1.position.x, body2.position.y);
  
   }
  }