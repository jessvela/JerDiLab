class Jitter {
  constructor(posX, posY) {
    this.x =posX ;
    this.y = posY;
    this.speed = 5;
  }
  move() {
    this.x = this.x - this.speed;
     if (this.x<=-110){ 
       this.x=this.x +width;
   
  }
  }
  Display() {
      rect(this.x+100, this.y+30, 100, 50);

    }
