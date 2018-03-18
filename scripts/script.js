// gère le déplacement des blocks
clickB = false;
function move_bases(event,div)
{
    clickB = false;
    if (div =='debut')
    {
        document.onmousemove = on_mouse_move_debut;
        document.onmouseup = on_mouse_up_debut;
        on_mouse_down_debut(event);
    }
    else if (div == 'avancer')
    {
        document.onmousemove = on_mouse_move_avancer;
        document.onmouseup = on_mouse_up_avancer;
        on_mouse_down_avancer(event);
    }
    else if (div == 'gauche')
    {
        document.onmousemove = on_mouse_move_gauche;
        document.onmouseup = on_mouse_up_gauche;
        on_mouse_down_gauche(event);
    }
    else if (div == 'droite')
    {
        document.onmousemove = on_mouse_move_droite;
        document.onmouseup = on_mouse_up_droite;
        on_mouse_down_droite(event);
    }
    else if (div == "collision")
    {
        document.onmousemove = on_mouse_move_collision;
        document.onmouseup = on_mouse_up_collision;
        on_mouse_down_collision(event);        
    }
}

function col_end_div(event)
{
    divT  = document.getElementById("tools");
    divD  = document.getElementById("droite");
    if (divD.style.top + divD.style.heiht >= divT.style.height)
    {
        divD.style.display = "none";
    }
}

// gère l'affichage des blocks

clickT = false;

function test(event)
{
    if (clickT == false)
    {
        div  = document.getElementById("debut");
        divA  = document.getElementById("avancer");
        divG  = document.getElementById("gauche");
        divG  = document.getElementById("gauche");
        divD = document.getElementById("droite");
        div1  = document.getElementById("elem_head");
        div1.style.height = "20vw";
        div.style.top = "1vw";
        divA.style.top = "7vw";
        divG.style.top = "14vw";
        show_elem('debut');
        show_elem('avancer');
        show_elem('gauche');
        show_elem('droite');
        clickT = true;
    }
    else if (clickT == true)
    {
        div1  = document.getElementById("elem_head");
        div1.style.height = "3vw";
        hide_elem('debut');
        hide_elem('avancer');
        hide_elem('gauche');
        hide_elem('droite');
        clickT = false;
    }

}

function  get_divs(div)
{
    var myArray = [];
    if ((get_col(vwTOpx(81),vwTOpx(0),300, div)) == true)
        return (myArray.push(div));
}

// gère la collision entre deux blocks

function get_col_elems(X,Y,tailleDIV, divAV,div)
  {
      xDIV = document.getElementById(div).offsetLeft;
      yDIV = document.getElementById(div).offsetTop;
      yDIV1 = document.getElementById(divAV).offsetTop;
      xDIV1 = document.getElementById(divAV).offsetLeft;
      tailleDIV = tailleDIV + 50;
      if ((xDIV >= xDIV1 - tailleDIV && xDIV <= xDIV1 + tailleDIV) && (yDIV >= yDIV1 - tailleDIV && yDIV <= yDIV1 + tailleDIV))
          return (true);
      return (false);
  }

// gère la collision entre deux blocks

function get_col_elems1(X,Y,tailleDIV, divAV,div)
  {
      xDIV = document.getElementById(div).offsetLeft;
      yDIV = document.getElementById(div).offsetTop;
      yDIV1 = document.getElementById(divAV).offsetTop;
      xDIV1 = document.getElementById(divAV).offsetLeft;
      tailleDIV = tailleDIV + 50;
      if ((xDIV >= xDIV1 - tailleDIV && xDIV <= xDIV1 + tailleDIV) && (yDIV >= yDIV1 - tailleDIV && yDIV <= yDIV1 + tailleDIV))
          return (true);
      return (false);
  }
// gère la collision entre deux blocks

function get_col_elems_left(X,Y,tailleDIV, divAV,div)
  {
      xDIV = document.getElementById(div).offsetLeft;
      yDIV = document.getElementById(div).offsetTop;
      yDIV1 = document.getElementById(divAV).offsetTop;
      xDIV1 = document.getElementById(divAV).offsetLeft;
      tailleDIV = tailleDIV + 50;
      if ((xDIV >= xDIV1 - tailleDIV) && (yDIV >= yDIV1 - tailleDIV))
          return (1);
      else if ((xDIV <= xDIV1 + tailleDIV) && (yDIV >= yDIV1 + tailleDIV))
	  return (2);
  }

function get_col(X,Y,tailleDIV, div)
{
    xDIV = document.getElementById(div).offsetLeft;
    yDIV = document.getElementById(div).offsetTop;
    if ((xDIV <= X - tailleDIV) && (xDIV > 300)) // && (yDIV >= Y - tailleDIV && yDIV <= Y + tailleDIV))
        return (true);
    return (false);
  }

// convertir une taille wv en px

function vwTOpx(value) {
    var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[1],
	x = w.innerWidth || e.clientWidth || g.clientWidth;
    var result;
    result = (x*value)/100;
    return(result);
}

function get_value(div){
    
    var avancer = "";
    avancer = document.getElementById(div).value;
    return (avancer);
}


var arduino="";
var raspberry="";
function arduino_check(){
    arduino=document.getElementById('arduino').value;
    if (arduino == 'on')
    {
        console.log(arduino);
    }
}

function raspberry_check(){
    raspberry=document.getElementById('raspberry').value;
   if (raspberry == 'on')
    {
        console.log(raspberry);
    }
}

// envoie les blocks utilisés

function send_bloks()
 {     divs = 'trad.php?divs=';
      if (get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','debut') == true)
        {
            divs = divs + 'debut;avancer('+ get_value('av') + ')';
            if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','avancer') == true)
            {
                divs = divs + ';droite('+ get_value('right') + ')';
                if (get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','droite') == true)
                {
                    divs = divs + ';gauche('+ get_value('left') + ')';
                }
            }
            else if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','avancer') == true)
            {
                divs = divs + ';gauche('+ get_value('left') + ')';
                if (get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','gauche') == true)
                {
                    divs = divs + ';droite('+ get_value('right') + ')';
                }
            }
        }
        else if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','debut') == true)
        {
            divs = divs + 'debut;gauche('+ get_value('left') + ')';
            if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','gauche') == true)
            {
                divs = divs + ';droite('+ get_value('right') + ')';
            }
            else if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','gauche') == true)
            {
                divs = divs + ';avancer('+ get_value('av') + ')';
            }   
        
       }
        else if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'droite','debut') == true)
        {
            divs = divs + 'debut;droite('+ get_value('right') + ')';   
            if (get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'gauche','droite') == true)
            {
                divs = divs + ';gauche('+ get_value('right') + ')';
            }
            else if(get_col_elems(vwTOpx(3),vwTOpx(3),vwTOpx(3), 'avancer','droite') == true)
            {
                divs = divs + ';avancer('+ get_value('av') + ')';
            }
        }
        console.log(divs)
      window.location.replace(divs);
  }

// cache un element

function hide_elem(div)
{
    if ((get_col(vwTOpx(81),vwTOpx(0),300, div)) == false)
    {
    div = document.getElementById(div);
    d = div.style;
    d.display ="none";
    }
}

// affiche un élément

function show_elem(div)
{
    if ((get_col(vwTOpx(81),vwTOpx(0),100, div)) == false)
    {
    divShow = document.getElementById(div);
    dS = divShow.style;
    dS.display = "block";
    }
}

