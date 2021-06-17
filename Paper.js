class Paper{
    constructor(){
        var options={
            restitution:0.3,
            friction:1.3,
            density:1
        }
        this.body=Bodies.circle(100,500,30,options)
        World.add(world,this.body)

    }
    display(){

        push()
            rotate(this.body.angle)
            translate(this.body.position.x,this.body.position.y)
            fill(23,230,217)
            ellipse(0,0,60,60)
        pop()
    }
}