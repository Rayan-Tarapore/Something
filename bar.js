class Bar{
    constructor(x,y,width,height){
    var bar_option={
        isStatic:true,
    }
    
    this.body = Bodies.rectangle(x,y,width,height,bar_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        noStroke();
        fill(250,250,0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
