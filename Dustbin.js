class Box{

constructor(){
    var boxPosition=700
    var boxY=670

    this.body1 = Bodies.rectangle(boxPosition, boxY, 300,20 , {isStatic:true} );
    World.add(world,  this.body1);

    this.body0 = Bodies.rectangle(boxPosition-150, boxY-65, 30,150 , {isStatic:true} );
    World.add(world, this.body0);

 

    this.body2 = Bodies.rectangle(boxPosition+150 , boxY-65, 30,150 , {isStatic:true} );
 	World.add(world,  this.body2);
}
display(){

    push()
      
        fill(23,20,27)
        rect(this.body1.position.x,this.body1.position.y,300,20)
        
        rect(this.body0.position.x,this.body0.position.y,30,150)
    
        rect(this.body2.position.x,this.body2.position.y,30,150)
    pop()
}

}