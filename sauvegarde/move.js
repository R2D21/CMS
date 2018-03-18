var myArray = [];
function on_mouse_down_debut(event) {
    color = document.getElementById('debut');
    c = color.style;
    // c.background = "green";
    mouse_down_debut=true;
}

function on_mouse_up_debut(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_debut=false;
}

function on_mouse_move_debut(event) {
    if (mouse_down_debut === true) {
	if (event.clientX - 10 >= 0)
	{
	    div = document.getElementById('tools');
            if (event.clientX - 10 >= 0 && event.clientX >=310)
            {
		document.querySelector('#debut').style.left = event.clientX-10+'px';
		document.querySelector('#debut').style.top = '10px';
		
            }
            
	}
    }
}

function on_mouse_down_avancer(event) {
    // color = document.getElementById('avancer');
    // c = color.style;
    // // c.background = "green";
    mouse_down_avancer=true;
}

function on_mouse_up_avancer(event){
 // color = document.getElementById('var');
 //    c = color.style;
 //    c.background = "red";
    mouse_down_avancer=false;
}

function on_mouse_move_avancer(event) {
    if (mouse_down_avancer === true) {
      if (event.clientX - 10 >= 0 && event.clientX >=310)
	{
	    document.querySelector('#avancer').style.left = event.clientX-10+'px';
	    document.querySelector('#avancer').style.top = event.clientY-10+'px';
	    if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','debut')) == true)   
            {
		div = document.getElementById('avancer');
		div1 = document.getElementById('debut');
		div1.style.bottom = '26px'
		div.style.top = (div1.style.top.split('p')[0] * 8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','gauche')) == true)   
            {
		div = document.getElementById('avancer');
		div1 = document.getElementById('gauche');
		div.style.top = (div1.style.top.split('p')[0] * 1.8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
		
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','droite')) == true)   
            {
		div = document.getElementById('avancer');
		div1 = document.getElementById('droite');
		div.style.top = (div1.style.top.split('p')[0] * 1.4) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
		
            }
        }
    }
}

function on_mouse_down_gauche(event) {
    color = document.getElementById('gauche');
    c = color.style;
    // c.background = "green";
    mouse_down_gauche=true;
}

function on_mouse_up_gauche(event){
    // color = document.getElementById('var');
    //    c = color.style;
    //    c.background = "red";
    mouse_down_gauche=false;
}

function on_mouse_move_gauche(event) {

    if (mouse_down_gauche === true) {
        if (event.clientX - 10 >= 0 && event.clientX >=310)
	{
	    document.querySelector('#gauche').style.left = event.clientX-10+'px';
	    document.querySelector('#gauche').style.top = event.clientY-10+'px';
	    if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','avancer')) == true)   
            {
		div = document.getElementById('gauche');
		div1 = document.getElementById('avancer');
		div.style.top = (div1.style.top.split('p')[0] * 2) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','debut')) == true)   
            {
		div = document.getElementById('gauche');
		div1 = document.getElementById('debut');
		div.style.top = (div1.style.top.split('p')[0] * 8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','droite')) == true)   
            {
		div = document.getElementById('gauche');
		div1 = document.getElementById('droite');
		div.style.top = (div1.style.top.split('p')[0] * 1.5) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
		
            }
	}
    }
}

function on_mouse_down_droite(event) {
    color = document.getElementById('droite');
    c = color.style;
    // c.background = "green";
    mouse_down_droite=true;
}

function on_mouse_up_droite(event){
    // color = document.getElementById('var');
    //    c = color.style;
    //    c.background = "red";
    mouse_down_droite=false;
}

function on_mouse_move_droite(event) {
    if (mouse_down_droite === true) {
        if (event.clientX - 10 >= 0 && event.clientX >=310)
	{
	    document.querySelector('#droite').style.left = event.clientX-10+'px';
	    document.querySelector('#droite').style.top = event.clientY-10+'px';
	    if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','gauche')) == true)   
            {
		div = document.getElementById('droite');
		div1 = document.getElementById('gauche');
		div.style.top = (div1.style.top.split('p')[0] * (1.48)) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','debut')) == true)   
            {
		div = document.getElementById('droite');
		div1 = document.getElementById('debut');
		div.style.top = (div1.style.top.split('p')[0] * 8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','avancer')) == true)   
            {
		div = document.getElementById('droite');
		div1 = document.getElementById('avancer');
		div.style.top = (div1.style.top.split('p')[0] * 1.8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems1(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','collision')) == true)   
            {
		div = document.getElementById('droite');
		div1 = document.getElementById('collision');
		div.style.top = (div1.style.top.split('p')[0] * 3) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
		console.log("Collision");
	    }
	}
    }
}

function on_mouse_down_collision(event) {
    color = document.getElementById('collision');
    c = color.style;
    // c.background = "green";
    mouse_down_collision = true;
}

function on_mouse_up_collision(event){
    // color = document.getElementById('var');
    //    c = color.style;
    //    c.background = "red";
    mouse_down_collision = false;
}

function on_mouse_move_collision(event) {
    if (mouse_down_collision === true) {
        if (event.clientX - 10 >= 0 && event.clientX >=310)
	{
	    document.querySelector('#collision').style.left = event.clientX-10+'px';
	    document.querySelector('#collision').style.top = event.clientY-10+'px';
	    if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'collision','gauche')) == true)   
            {
		div = document.getElementById('collision');
		div1 = document.getElementById('gauche');
		div.style.top = (div1.style.top.split('p')[0] * (1)) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'collision','debut')) == true)   
            {
		div = document.getElementById('collision');
		div1 = document.getElementById('debut');
		div.style.top = (div1.style.top.split('p')[0] * 8) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
            }
            else if ((get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'collision','avancer')) == true)   
            {
		div = document.getElementById('collision');
		div1 = document.getElementById('avancer');
		div.style.top = (div1.style.top.split('p')[0] * 1) + 'px';
		div.style.left = div1.style.left.split('p')[0] + 'px';
		
	    }
	}
    }
}
