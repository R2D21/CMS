
function on_mouse_down_plus(event) {
    color = document.getElementById('plus');
    c = color.style;
    // c.background = "green";
    mouse_down_plus=true;
}

function on_mouse_up_plus(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_plus=false;
}

function on_mouse_move_plus(event) {
    if (mouse_down_plus === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#plus').style.left = event.clientX-10+'px';
	    document.querySelector('#plus').style.top = event.clientY-10+'px';
	  }
  }
}

function on_mouse_down_moins(event) {
    color = document.getElementById('moins');
    c = color.style;
    // c.background = "green";
    mouse_down_moins=true;
}

function on_mouse_up_moins(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_moins=false;
}

function on_mouse_move_moins(event) {
    if (mouse_down_moins === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#moins').style.left = event.clientX-10+'px';
	    document.querySelector('#moins').style.top = event.clientY-10+'px';
	  }
  }
}

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


function on_mouse_down_int(event) {
    color = document.getElementById('int');
    c = color.style;
    // c.background = "green";
    mouse_down_int=true;
}

function on_mouse_up_int(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_int=false;
}

function on_mouse_move_int(event) {
    if (mouse_down_int === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#int').style.left = event.clientX-10+'px';
	    document.querySelector('#int').style.top = event.clientY-10+'px';
	  }
  }
}

function on_mouse_down_char(event) {
    color = document.getElementById('char');
    c = color.style;
    // c.background = "green";
    mouse_down_char=true;
}

function on_mouse_up_char(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_char=false;
}

function on_mouse_move_char(event) {
    if (mouse_down_char === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#char').style.left = event.clientX-10+'px';
	    document.querySelector('#char').style.top = event.clientY-10+'px';
	  }
  }
}

function on_mouse_down_div(event) {
    color = document.getElementById('div');
    c = color.style;
    // c.background = "green";
    mouse_down_div=true;
}

function on_mouse_up_div(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_div=false;
}

function on_mouse_move_div(event) {
    if (mouse_down_div === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#div').style.left = event.clientX-10+'px';
	    document.querySelector('#div').style.top = event.clientY-10+'px';
	  }
  }
}


function on_mouse_down_float(event) {
    color = document.getElementById('float');
    c = color.style;
    // c.background = "green";
    mouse_down_float=true;
}

function on_mouse_up_float(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_float=false;
}

function on_mouse_move_float(event) {
    if (mouse_down_float === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#float').style.left = event.clientX-10+'px';
	    document.querySelector('#float').style.top = event.clientY-10+'px';
	  }
  }
}


function on_mouse_down_bool(event) {
    color = document.getElementById('bool');
    c = color.style;
    // c.background = "green";
    mouse_down_bool=true;
}

function on_mouse_up_bool(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_bool=false;
}

function on_mouse_move_bool(event) {
    if (mouse_down_bool === true) {
      if (event.clientX - 10 >= 0)
	{
	    document.querySelector('#bool').style.left = event.clientX-10+'px';
	    document.querySelector('#bool').style.top = event.clientY-10+'px';
	  }
  }
}
