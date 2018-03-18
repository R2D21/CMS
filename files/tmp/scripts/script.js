
// Détermine si il y a une collision entre deux divs ou non.

function get_col(X,Y,tailleDIV, div)
  {
      xDIV = document.getElementById(div).offsetLeft;
      yDIV = document.getElementById(div).offsetTop;
      if ((xDIV <= X - tailleDIV) && (xDIV > 200)) // && (yDIV >= Y - tailleDIV && yDIV <= Y + tailleDIV))
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

// cache un element

function hide_elem(div)
{
    if ((get_col(vwTOpx(81),vwTOpx(0),100, div)) == false)
    {
	div = document.getElementById(div);
	d = div.style;
	d.display="none";
    }
}

// affiche un élément

function show_elem(div)
{
    if ((get_col(vwTOpx(81),vwTOpx(0),100, div)) == false)
    {
	divShow = document.getElementById(div);
	dS = divShow.style;
	dS.display="block";
	
    }
}


click = false;

// gère le click sur les opérations

function maths()
{
    if (click == false)
    {
    	div = document.getElementById("elem_head");
	dA = div.style;
	dA.height="23vw";
	show_elem("plus");
	show_elem("moins");
	show_elem("mul");
	show_elem("div");
	click = true;
    }
    else if (click == true)
    {
        div = document.getElementById("elem_head");
	dA = div.style;
	dA.height="3vw";
	hide_elem("plus");
    	hide_elem("moins");
	hide_elem("mul");
	hide_elem("div");
	click = false;
    }
}

clickV = false;

// gère le click sur les variables

function vars()
{
    if (clickV == false)
    {
    	div = document.getElementById("elem_head_var");
	dA = div.style;
	dA.height="20vw";
	show_elem("int");
	show_elem("char");
	show_elem("float");
	show_elem("bool");
	clickV = true;
    }
    else if (clickV == true)
    {
	div = document.getElementById("elem_head_var");
	dA = div.style;
	dA.height="3vw";
        hide_elem("int");
        hide_elem("char");
  	hide_elem("float");
	hide_elem("bool");
	clickV = false;
    }
}

clickF = false;

// gère le click sur l'header des fonctions

function functions()
{
    if (clickF == false)
    {
    	div = document.getElementById("elem_head_func");
	dA = div.style;
	dA.height="20vw";
	divCreate = document.getElementById("create");
	dC = divCreate.style;
	dC.display="block";
	clickF = true;
    }
    else if (clickF == true)
    {
	div = document.getElementById("elem_head_func");
	dA = div.style;
	dA.height="3vw";
	divCreate = document.getElementById("create");
     	dC = divCreate.style;
	dC.display="none";
	clickF = false;
    }
}


// gère le déplacement des opérations

function move_maths(event, div)
{
    click = false;
    if (div =='plus')
    {
    	document.onmousemove = on_mouse_move_plus;
	    document.onmouseup = on_mouse_up_plus;
	    on_mouse_down_plus(event);
    	divPlus = document.getElementById("plus");
	    dP = divPlus.style;
	    dP.display="block";
    }
    else if (div =='moins')
    {
	document.onmousemove = on_mouse_move_moins;
	document.onmouseup = on_mouse_up_moins;
	on_mouse_down_moins(event);
    }
    else if (div =='mul')
    {
	document.onmousemove = on_mouse_move_mul;
	document.onmouseup = on_mouse_up_mul;
	on_mouse_down_mul(event);
    }
    else if (div =='div')
    {
	document.onmousemove = on_mouse_move_div;
	document.onmouseup = on_mouse_up_div;
	on_mouse_down_div(event);
    }
}

function test(div1,div2)
{
    creerCookie("lien", div1, 365);
    lireCookie("lien");
}

function create_connection()
{
    var divPlus;
    var divMoins;
    var divMul;
    var divInt;
    var divChar;
    var divFloat;
    var divBool;
    var myArray = [];

    divPlus  = document.getElementById("plus");
    // console.log(div1.style.left);
    divPlus.oncontextmenu = function (event) {
    click = false;
    console.log(event.clientX);
    myArray.push('plus');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    return false //on annule l'affichage du menu contextuel
    }
    divMoins  = document.getElementById("moins");
    // console.log(div1.style.left);
    divMoins.oncontextmenu = function (event) {
    click = false;
    console.log(event.clientX);
    myArray.push('moins');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    return false //on annule l'affichage du menu contextuel
    }
    divMul  = document.getElementById("mul");
    // console.log(div1.style.left);
    divMul.oncontextmenu = function (event) {
    console.log(event.clientX);
    myArray.push('mul');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    click = false;
    return false //on annule l'affichage du menu contextuel
    }
    divInt  = document.getElementById("int");
    // console.log(div1.style.left);
    clickV = false;
    divInt.oncontextmenu = function (event) {
    console.log(event.clientX);
    myArray.push('int');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    return false //on annule l'affichage du menu contextuel
    }
    divFloat  = document.getElementById("float");
    // console.log(div1.style.left);
    divFloat.oncontextmenu = function (event) {
    console.log(event.clientX);
    myArray.push('float');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    clickV = false;
    return false //on annule l'affichage du menu contextuel
    }
    divBool  = document.getElementById("bool");
    // console.log(div1.style.left);
    divBool.oncontextmenu = function (event) {
    console.log(event.clientX);
    myArray.push('bool');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);
    clickV = false;
    return false //on annule l'affichage du menu contextuel
    }
    divChar = document.getElementById("char");
    // console.log(div1.style.left);
    divChar.oncontextmenu = function (event) {
    console.log(event.clientX);
    myArray.push('char');
    if (myArray.length == 2)
        test(myArray[0], myArray[1]);

    clickV = false;
    return false //on annule l'affichage du menu contextuel
}


    // dA.display="block";

}

function creerCookie(nom, valeur, jours) {
// Le nombre de jours est spécifié
     if (jours)
      {
           var date = new Date();
           // Converti le nombre de jour en millisecondes
           date.setTime(date.getTime()+(jours*24*60*60*1000));
           var expire = "; expire="+date.toGMTString();
        }
        // Aucune valeur de jours spécifiée
        else
            var expire = "";
        document.cookie = nom+"="+valeur+expire+"; path=/";
}

// creerCookie(nom, valeur, -1); supprime le cookie

function lireCookie(nom)
 {
    // Ajoute le signe égale virgule au nom
    // pour la recherche
    var nom2 = nom + "=";
    // Array contenant tous les cookies
    var arrCookies = document.cookie.split(';');
        // Cherche l'array pour le cookie en question
    for(var i=0;i < arrCookies.length;i++)
    {
        var a = arrCookies[i];
        // Si c'est un espace, enlever
        while (a.charAt(0)==' ')
        {
            a = a.substring(1,a.length);
        }
        if (c.andexOf(nom2) == 0)
        {
            return a.substring(nom2.length,a.length);
        }
    }
        // Aucun cookie trouvé
    return null;
}

function connection(event)
{
    switch (event.keyCode) {
        case 32: /* space */  
            create_connection();
            break;
        case 72: /* h */
            div = document.getElementById("windows");
            dA = div.style;
            dA.display="none";
            break;
        case 17: /* ctrl */  
            break;
    }
}

// gère le déplacement des variables

function move_vars(event,div)
{
    clickV = false;
    if (div =='int')
    {
     	document.onmousemove = on_mouse_move_int;
	    document.onmouseup = on_mouse_up_int;
	    on_mouse_down_int(event);
    }
    else if (div =='char')
    {
     	document.onmousemove = on_mouse_move_char;
	    document.onmouseup = on_mouse_up_char;
	    on_mouse_down_char(event);
    }
    else if (div =='float')
    {
    	document.onmousemove = on_mouse_move_float;
	    document.onmouseup = on_mouse_up_float;
	    on_mouse_down_float(event);
    }
    else if (div =='bool')
    {
    	document.onmousemove = on_mouse_move_bool;
	    document.onmouseup = on_mouse_up_bool;
	    on_mouse_down_bool(event);
    }
}

// gère le déplacement des fonctions

function move_func()
{
    clickF = false;
}

function check()
{
    alert("CHECK");
}
