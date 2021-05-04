class MANGO{
    constructor(x,y,w,h){
        var ops = {
            isStatic:true,
            "friction" :0.1,
            "density":0.1
        }

        this.mango = Bodies.rectangle(x,y,w,h,ops)
        this.width = w;
        this.height = h;
        this.image = loadImage("mango.png");
        World.add(world,this.mango);
    }

    display(){
        var pos = this.mango.position
        push();
        //translate(pos.x,pos,y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}