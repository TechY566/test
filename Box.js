class Box{
constructor(x,y,width,height){
var options={

    'restitution':0.8,
    'friction':0.3,
    'density':0.3
}

    this.body = Bodies.rectangle(x,y,width,height)
    
    this.width = width;
    this.height=height;
    World.add(world,this.body)
}


display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y,this.width,this.height); 
    

}

}