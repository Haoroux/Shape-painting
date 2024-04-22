class Square {
  constructor(size, posX, posY,col1,col2,col3,opacity){
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.opacity = opacity
    
  } 
  
  draw(){
    
    fill(this.col1,this.col2,this.col3,this.opacity)
    square(this.posX,this.posY,this.size)
  }
  
  
}