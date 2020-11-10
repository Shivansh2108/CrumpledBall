class paper{

    constructor(x,y){

        var options={
           
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2

        }

        this.body=Bodies.circle(x,y,30,options);
        this.width=30;

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.width);
        
    }
}