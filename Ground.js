class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(600,700,1200,40,options)
        World.add(world,this.body)

    }
    display(){

        push()
          
            fill(213,20,27)
            rect(this.body.position.x,this.body.position.y,1200,40)
        pop()
    }
}