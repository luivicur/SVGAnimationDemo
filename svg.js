var angle = 0;
var circleX = 10;
var circleDx = 10;
var circleY = 250;
var circleDy = 0;
var gravity = 1;
var friction = 0.07;

// Main Function To Start
function start()
{
	return setInterval(animate, 50);
}

function animate()
{
	rotateEllipse();
	moveCircle();
}

function rotateEllipse()
{
	var transform = "rotate(" + angle + " 100 100)";
	$("#ellipse").attr("transform", transform);
	angle += 5;
	if(angle > 360) angle = 0;
}

function moveCircle()
{
	$("#circle").attr("cx", circleX);
	circleX += circleDx;
	if(circleX > 650) circleX = 10;
	
	circleDy += gravity;
	circleY += circleDy;
	$("#circle").attr("cy", circleY);
	
	if(circleY >= 650)
	{
		circleY = 650;
		circleDy *= -0.85;
		
		circleDx -= friction;
		if(circleDx < 0) circleDx = 0;
	}
}

$(document).ready(function()
{
	start();
});