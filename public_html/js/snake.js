var snake; 

var context; 
var screenwidth; 
var screenheight; 

gameInitialize ();
gamedraw (); 
function gameInitialize(){
   var canvas = document.getElementById ("game-screen"); 
   context = canvas.getContext ('2d'); 

   screenwidth = window.innerwidth;
   screenheight = window.innerHeight; 
   
   canvas.width = screenwidth; 

}
function gameLoop() {
    
}
function gameDraw() {
    context.fillstyle = "rgb(180,250,213)";
    context.fillRect = (0,0, screenwidth, screenheight); 
}