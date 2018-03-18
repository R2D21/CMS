
function on_mouse_down_mul(event) {
    color = document.getElementById('mul');
    c = color.style;
    // c.background = "green";
    mouse_down_mul=true;
}

function on_mouse_up_mul(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_mul=false;
}

function on_mouse_move_mul(event) {
    if (mouse_down_mul === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#mul').style.left = event.clientX-10+'px';
	    document.querySelector('#mul').style.top = event.clientY-10+'px';
	  }
  }
}
