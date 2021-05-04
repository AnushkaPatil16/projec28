class STON{
    constructor(x,y){

        var ops = {
            
        }
        this.body = Bodies.circle(x,y,40,ops);
        this.R = 40;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
        
    }

    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.R,this.R);

    }
}