class Blocks{
    constructor(x,y,width,height){
       
        var options = {
            //isStatic:true,
            restitution:0.8,
            friction:1.0,
            //density:0.8
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        this.visibility = 255;

        World.add(world,this.body);
    }
    display(){

        console.log(this.body.speed);

        if(this.body.speed<3){
            push();
            translate(this.body.position.x,this.body.position.y);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();

        }else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        rect(0,0,this.width,this.height);
        pop();
    
        }

        
    }
}