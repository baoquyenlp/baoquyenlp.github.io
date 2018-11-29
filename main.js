//Zoom Out
function zoomOut() {
	var zoom_out = document.getElementById('zoomOut');
	zoom_out.classList.toggle('reset');
}

//Progress Bar

function run() {
  	var my_bar = document.getElementById("myBar"); 
  	var percent = document.getElementById("percent");   
  	var width = 0;
  	var id = setInterval(frame, 10);
  	function frame() {
    	if (width >= 100) {
      		clearInterval(id);
    	} else {
      		width++; 
      		my_bar.style.width = width + '%'; 
      		percent.innerHTML = width * 1  + '%';
    	}
  	}
}

// Change Color
function changeColor() {
    var box_color = document.getElementById("boxColor");
    var red = document.getElementById("rangeRed").value;
    var green = document.getElementById("rangeGreen").value;
    var blue = document.getElementById("rangeBlue").value;
    box_color.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// Control Box

function moveBox() {
    var move_box = document.getElementById("moveBox"); 
    var data = document.getElementById("control").value;
    move_box.style.left = data + '%';
}

//Circle
function circle() {
	setInterval(function() {
		var circle = document.getElementById('circle');
		circle.classList.toggle('resetCircle');
	}, 3000);
}

//Circle
function opacity() {
	var run = 1;
	setInterval(function() {
		var box1 = document.getElementById('opacityBox1');
		var box2 = document.getElementById('opacityBox2');
		var opacity = document.getElementsByClassName('opacityHidden');
		if (run == 1) {
			box1.classList.toggle('opacityHidden');
			box2.classList.remove('opacityHidden');
			run = 2;
		} else {
			box2.classList.toggle('opacityHidden');
			box1.classList.remove('opacityHidden');
			run = 1;
		}
	}, 3000);
}