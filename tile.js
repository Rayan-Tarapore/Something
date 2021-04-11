class Tile{
    constructor(x,y,width,height){
    var tile_option={
        isStatic:true,
        friction:0.2
    }
    this.body = Bodies.rectangle(x,y,width,height,tile_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        noStroke();
        fill(0,0,0)
        rect(pos.x,pos.y,this.width,this.height);
    }
}