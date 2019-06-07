var tiempoespera=0;;
let obt1 =[];

//ArrayList<obt>obstaculosi = New ArrayList<obt>(); 
function setup() {
 frameRate(60); 
createCanvas(710,400);
    for (var a = 0; a < 5; a++) {
      
        obt1.push(new Jitter(random(width,width+100),80));
      
               
    }
   
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

  
 
}
