class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0,
          'density':0.001
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.remove=true;

      World.add(world, this.body);
 }
    display(){
     if((this.body.speed)<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
     } else
     
     { World.remove(world, this.body);
      if(this.remove === true){
        score = score+20;
        this.remove = false;
      }
   }
    }
  }
  