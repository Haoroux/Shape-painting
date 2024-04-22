//var
//blue and purple
// color0 = [247, 37, 133]
// color1 = [114, 9, 183]
// color2 = [58, 12, 163]
// color3 = [67, 97, 238]
// color4 = [76, 201, 240]
// colorList = [color0,color1,color2,color3,color4]
// console.log(colorList)

colors = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],  
];

console.log(colors);

amountColors = 2;

sw = 800;
sh = 800;

displayOpt = true;

function setup() {
  createCanvas(sw, sh);
  noStroke();
  background(250)
  // drawShapes()  
  // alert("test")
  settings();
}

function settings(){  
  // fill(0,0,0,)
  textSize(22);
  test = text("Settings",20,20);
  textSize(18);
  text("colors:", 40, 40); 
  for(let i = 0; i<10; i++){
    let r, g, b;
    window[`color${i}input`] = createInput();
    window[`color${i}input`].attribute('placeholder', 'r,g,b');
    window[`color${i}input`].position(50, 50+i*20);
    window[`color${i}input`].addClass("opt");
  }
  textSize(18);
  text("How many color setting did you complete :", 40, 270);
  amountColorsInput = createInput("2","number")
  amountColorsInput.position(50, 280);
  amountColorsInput.addClass("opt");
  
  
  textSize(18);
  text("size:", 400, 40);
  swInput = createInput()
  swInput.attribute('placeholder', 'width of the draw')
  swInput.position(410, 50);
  swInput.addClass("opt");
  shInput = createInput();
  shInput.attribute('placeholder', 'height of the draw')
  shInput.position(410, 70);
  shInput.addClass("opt");
  
  
  button = createButton('Done ?');
  button.position(400, 400);
  button.mousePressed(settingsApply);
  button.addClass("opt");
  
  

}

function settingsApply(){  
  for (let i = 0; i < 10; i++) {
    colors[i] = [];
  }  
  for(let i = 0; i<10; i++){
    let r, g, b;
    [r, g, b] = window[`color${i}input`].value().split(',').map(Number);

    colors[i].push(r,g,b)
    // console.log(colors)
  }
  amountColors = amountColorsInput.value()
  colors.splice(amountColors, 9)

  sw = int(swInput.value())
  sh = int(shInput.value())
  
  console.log("hmc : "+String(amountColors))
  console.log("SWxSH : "+String(sw)+"x"+String(sh))  
  
  console.log("colors : "+String(colors))
  createCanvas(sw, sh);
  drawShapes()
}

function drawShapes() {  
  console.log(colors)
  
  size = sw
  posX = 0
  posY = 0
  col = colors[int(random(0,colors.length))]
  console.log("col : "+String(col))
  
  
  opacity = 250
  chance = 2
  idList= []
  i = 0
  let square0 = new Square(sw,0,0,col[0],col[1],col[2],opacity)

  square0.draw()
  // square(size, posX, posY,col[1],col[2],col[3],opacity)
  while (size > 25) {
    if (int(random(1,3)) == 1){
      col = colors[int(random(0,colors.length))]
      opacity = random(0,250)
    }
    if(int(random(1,chance)) == 1){
      // console.log("hey")
      let square1 = new Square(size,posX,posY,col[0],col[1],col[2],opacity)
      square1.draw()
      square1.id = "Square_" + String(i);
      idList.push(square1.id)
      i = i+1
      
    }

  if (posX + size >= sw){
    if (posY +size >= sh){
      posY = 0
      posX = 0
      chance = chance/2
      
      size = int(size/2)
  
      }else{//posY if
        // console.log(posX+size)
        posX = 0
        posY = posY+size
        chance = chance + 0.5
        
      }
  }else {//posX if
    posX = posX + size
    }//else
  }//while
}//function

function hideElementsByClass(className) {
    elements = document.getElementsByClassName(className);
    if(displayOpt == true){
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        displayOpt = false;
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "inline";
        }
        displayOpt = true;
    }
}


function keyPressed() {
  
  if (key === 'w' || key === 'W') {
    saveCanvas("canvas", "generativArt.jpg");
  }
  if (key === 'o' || key === 'O') {
      hideElementsByClass("opt")
  }
    if (key === 'r' || key === 'R') {
      settingsApply()
  }
}
