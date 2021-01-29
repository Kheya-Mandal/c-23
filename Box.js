class Box {
// properties
constructor(x,y,width,height){
    var options ={
       restitution:1,
       friction:0.8,
       density:0.8,
    }

    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width=width;
    this.height=height;
    World.add(world,this.body );

}


//functions

display(){

    var pos = this.body.position; // name spacing 
 var angle = this.body.angle;

 push();// for new settings
 translate(pos.x,pos.y);
 rotate(angle)
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
pop();// for original settings

    
}


}