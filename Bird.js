class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeIMG=loadImage("sprites/smoke.png")
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //for taking the value of position of bird, we have created variable position which is also an array type and this array conatins both x and y position of the bird
    if(this.body.velocity.x>10 &&this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
    for(var i =0;i<this.trajectory.length;i++)
    
    {
      image(this.smokeIMG,this.trajectory[i][0],this.trajectory[i][1])
    }

  }
}

