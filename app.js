function generarResumen(){

const actividad =
document.getElementById("actividad").value;

const institucion =
document.getElementById("institucion").value;

const responsable =
document.getElementById("responsable").value;

const correo =
document.getElementById("correo").value;

const fecha =
document.getElementById("fecha").value;

const plan =
document.getElementById("plan").value;

const estaciones =
document.getElementById("estaciones").value;

const preguntas =
document.getElementById("preguntas").value;

const colores =
document.getElementById("colores").value;

const graficas =
document.getElementById("graficas").value;

const contenidos =
document.getElementById("contenidos").value;

const checks =
document.querySelectorAll(
'input[type="checkbox"]:checked'
);

let funcionalidades=[];

checks.forEach(c=>{

funcionalidades.push(
c.value
);

});

const resumen = `

<h2>Resumen de Solicitud</h2>

<p><b>Actividad:</b> ${actividad}</p>

<p><b>Institución:</b> ${institucion}</p>

<p><b>Responsable:</b> ${responsable}</p>

<p><b>Correo:</b> ${correo}</p>

<p><b>Fecha:</b> ${fecha}</p>

<p><b>Plan:</b> ${plan}</p>

<p><b>Estaciones:</b> ${estaciones}</p>

<p><b>Preguntas por estación:</b> ${preguntas}</p>

<p><b>Funcionalidades:</b>
${funcionalidades.join(", ")}
</p>

<p><b>Colores institucionales:</b>
${colores}
</p>

<p><b>Gráficas:</b>
${graficas}
</p>

<p><b>Contenidos:</b>
${contenidos}
</p>

`;

const div =
document.getElementById("resultado");

div.innerHTML=resumen;

div.classList.remove("hidden");

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}
