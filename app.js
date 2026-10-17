document.addEventListener("DOMContentLoaded",()=>{

const planes =
document.querySelectorAll(
'input[name="plan"]'
);

const contenidos =
document.querySelectorAll(
'input[name="contenido"]'
);

const quizContainer =
document.getElementById(
"quizContainer"
);

const quizLabel =
document.getElementById(
"quizLabel"
);

const resumen =
document.getElementById(
"resumenPrecio"
);

function actualizarFormulario(){

let precio = 0;

let planSeleccionado =
document.querySelector(
'input[name="plan"]:checked'
);

if(!planSeleccionado){

resumen.innerHTML =
"Seleccione un plan";

return;

}

switch(planSeleccionado.value){

case "basico":

precio = 50000;

quizContainer.style.display =
"none";

break;

case "intermedio":

precio = 100000;

quizContainer.style.display =
"block";

quizLabel.innerHTML =
"Número de Quiz (hasta 4)";

break;

case "avanzado":

precio = 150000;

quizContainer.style.display =
"block";

quizLabel.innerHTML =
"Número de Quiz";

break;

}

let contenidoSeleccionado =
document.querySelector(
'input[name="contenido"]:checked'
);

if(
contenidoSeleccionado &&
contenidoSeleccionado.value==="origena"
){

precio += 30000;

}

resumen.innerHTML = `

Plan:
<strong>
${planSeleccionado.value.toUpperCase()}
</strong>

<br><br>

Valor estimado:

<strong>
$${precio.toLocaleString("es-CL")}
</strong>

`;

}

planes.forEach(p=>{

p.addEventListener(
"change",
actualizarFormulario
);

});

contenidos.forEach(c=>{

c.addEventListener(
"change",
actualizarFormulario
);

});

actualizarFormulario();

});
