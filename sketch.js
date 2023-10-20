let xBolinha = 90
let yBolinha = 300
let diametro = 20
let raio = diametro/2
let velocidadeXbolinha = 10
let velocidadeYbolinha = 10
let xRaquete = 10
let yRaquete = 265
let larguraRaquete = 10
let alturaRaquete = 100
let velocidadeYraquete = 10
let hit = false;


function setup() {
  createCanvas(800, 600);
}



function draw() {
 
  background(0);
  criarBolinha();
  moverBolinha();
  borda();
  criarRaquete();
  movimentoRaquete();
  colisãoRaquete();
 
 
 
 
function criarBolinha(){
 
circle(xBolinha,yBolinha,diametro);

}



function moverBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
 
}

 
 
function borda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){velocidadeXbolinha *= -1}
   if(yBolinha + raio > height || yBolinha - raio < 0){velocidadeYbolinha *= -1}
  }

 
function criarRaquete(){
   
  rect(xRaquete,yRaquete, larguraRaquete, alturaRaquete);
   
  }
   
 
function movimentoRaquete(){
 
 if(keyIsDown(UP_ARROW)){yRaquete -= velocidadeYraquete}
if(keyIsDown(DOWN_ARROW)){yRaquete += velocidadeYraquete}
 
}
 
function colisãoRaquete(){
  hit = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha,yBolinha, raio);
  if(hit){
    velocidadeXbolinha *= -1
  }
 

}
 
 
 
 
}