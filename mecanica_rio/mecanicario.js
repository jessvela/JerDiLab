var tiempoespera=0;;
let obt1 =[];
let obt2;

//ArrayList<obt>obstaculosi = New ArrayList<obt>(); 
function setup() {
 frameRate(60); 
createCanvas(710,400);
    for (var a = 0; a < 1; a++) {
      
        obt1.push(new Jitter(random(width,width+100),80));
      
               
    }
   obt2=new Jitter(width+200,200);
}

function draw() {
   background(100);

  
    for (var i = 0; i < obt1.length; i++) {
        obt1[i].move();
     
     // if(obt1[i].posX<=100){
      // obt1.push(new Jitter(random(width,width+100),80)); 
        //print(obt1.posX);
      //}
        obt1[i].Display();
      
      
    }
obt2.move();
  obt2.Display();
 
}
