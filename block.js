class Block{
    constructor(x, y, width, height) {
        var options = {
          isStatic: false,
            density: 0.001,
            friction: 1
                     
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed < 3){
          push();
          rectMode(CENTER);
          translate(pos.x, pos.y);
          rotate(angle);
          rect(0,0,this.width, this.height);        
          pop();
        } else {
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 1;
          tint(255, this.visibility);
          pop();
        }
      }
}
