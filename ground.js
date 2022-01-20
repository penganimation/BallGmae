class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }

        this.width = w;
        this.height = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("yellow");
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    }
}