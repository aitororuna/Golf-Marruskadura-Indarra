var canvas = document.querySelector("canvas");
var W=canvas.width = 1300;
var H=canvas.height = 600;
var ctx = canvas.getContext("2d");
var Fr; //Fr=u*(m*g)
var lurra1;
var izotza1;
var belarra1;
var harea1;

var vx = 2;
var vy = 0;
//----------------------------------------------------------------------
function JokoaHasi(){
	ctx=canvas.getContext("2d");
	Frame();
}
//-----------------------------------------------------------------------
function Pelota()
{
	this.radius = 10;
	this.x= 0;
	this.y= 495;

	this.draw = function(ctx)
	{
		ctx.beginPath();
		ctx.fillStyle="blue";

		ctx.arc(				//dibuja el círculo
			this.x,
			this.y,
			this.radius,
			0,
			Math.PI*2,
			false,
		);

		ctx.closePath();
		ctx.fill();

	}
}
var pelota1 = new Pelota();
var izotza1=new Izotza(500, 500);
var belarra1=new Belarra(0, 500);
var harea1=new Harea(900, 500);
var lurra1=new Lurra(0,1300)

function Lurra(){ 
	ctx.fillStyle="#873600";
	ctx.fillRect(0,525,1300,75);

	
	
}
function Izotza(){
	Fr=2*0.441;
	ctx.fillStyle="#2EFEF7";
	ctx.fillRect(500,500,900,25);
	
	

}
function Belarra(){
	Fr=0.8*0.441;
	ctx.fillStyle="#00FF00";
	ctx.fillRect(0,500,500,25);
	

}
function Harea(){
	Fr=0.18*0.441;
	ctx.fillStyle="#FE9A2E";
	ctx.fillRect(900,500,1300,25);
	

}
function xBerriaKalkulatu(){
	if(pelota1.x >=0 && pelota1.x <=500)
	{
		Fr=0.8*0.441;			//belarra
		pelota1.x+=vx*Fr;
	}
	if(pelota1.x >=500 && pelota1.x <=900)
	{
		Fr=2.5*0.441;			//izotza
		pelota1.x+=vx*Fr;
	}
	if(pelota1.x >=900 && pelota1.x <=1300)
	{
		Fr=0.18*0.441;			//harea
		pelota1.x+=vx*Fr;
	}
}
function PelotaMug(){

	pelota1.x += vx;
}
//---------------------------------------------------------------------------
(function Frame(){
    requestAnimationFrame(Frame);
    ctx.clearRect(0,0,W,H)
 
	Principal();

	pelota1.draw(ctx);
}());
function Principal(){
	Lurra();
	Izotza();
	Belarra();
	Harea();
	PelotaMug();
	xBerriaKalkulatu();
}
