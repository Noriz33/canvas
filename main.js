canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con la imagen nuevae
	background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable para la imagen nueva
	rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

