class SLINGSHOT {
    constructor(a,b){
        var ops = {
            bodyA:a,
            pointB:b,
            stiffness:0.2,
            length:20
        }


        this.sling = Constraint.create(ops);
        this.pointb = b
        World.add(world,this.sling);
    }

     fly(){
        this.sling.bodyA = null;
    }

    
      
    attach(abc){
      this.sling.bodyA = abc
    }



    display(){

        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointb;
            push() 
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y) 
            pop()
            }
    }
}





//class SLINGSHOT{
  //  constructor(a,b){
    //     var options = {
      //      bodyA:a ,
        //    pointB:b,
          //  stiffness:0.2,
            //length:20
         //}

        //this.sling = Constraint.create(options);
        //this.pointb = b
        //World.add(world,this.sling) ;
   // }

    //fly(){
      //  this.sling.bodyA = null;
    //}

    //display(){
      //  if(this.sling.bodyA){
        //var posA = this.sling.bodyA.position;
       // var posB = this.pointb;
       // push() 
       // strokeWeight(5);
       // line(posA.x,posA.y,posB.x,posB.y) 
       // pop()
       // }
        
    //}
//}