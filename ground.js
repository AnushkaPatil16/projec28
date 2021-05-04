class GROUND{
    constructor(w,h){

        var ops = {
            isStatic: true
        }

        this.ground = Bodies.rectangle(400,650,w,h,ops);
        this.width = w;
        this.height = h;
        World.add(world,this.ground); 
    }

    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);


    }
}