
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function onload()
{
    // ajouteElement("tools","test");
    add_tools();
}

function add_tools()
{
    // crée un nouvel élément div
    // et lui donne un peu de contenu
    const nouveauDiv = document.createElement("tools");
    const nouveauContenu = document.createTextNode("test\ntest");
    nd = nouveauDiv.style;
    nd.width="20vw";
    nd.height="400px";
    nd.top="2vw";
    nd.left="2vw";
    nd.background = "rgb(232,232,232)";
    
    nouveauDiv.appendChild(nouveauContenu) //ajoute le contenu au div
    nouveauDiv.onmousedown="on_mouse_down_square(event)"; 
    // ajoute l'élément qui vient d'être créé et son contenu au DOM
    const divActuel = document.getElementById("test");
    dA = divActuel.style;
    insertAfter(nouveauDiv, divActuel);
}

 window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 32: /* space */   /* vos actions ici */       break;
        case 72: /* h */                               break;
        case 80: /* p */                               break;
    }
};
function ajouteElement(newDIV, actDIV) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement(newDIV);
  const nouveauContenu = document.createTextNode("var");
    // nd = nouveauDiv.style;
    // nd.width="40px";
    // nd.height="400px";
    // nd.top="2vw";
    // nd.left="2vw";
    // nd.background = "red";
    
    nouveauDiv.appendChild(nouveauContenu) //ajoute le contenu au div
    nouveauDiv.onmousedown="on_mouse_down_square(event)"; 
    // ajoute l'élément qui vient d'être créé et son contenu au DOM
    const divActuel = document.getElementById(actDIV);
    dA = divActuel.style;
    insertAfter(nouveauDiv, divActuel);
    
    // elem.id = 'test';
    
    // target.appendChild(elem);
}

