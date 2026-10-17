document.addEventListener("DOMContentLoaded", () => {

    const planes =
        document.querySelectorAll('input[name="plan"]');

    const contenidos =
        document.querySelectorAll('input[name="contenido"]');

    const resumen =
        document.getElementById("resumenPrecio");

    function actualizarFormulario() {

        let precio = 0;

        const plan =
            document.querySelector(
                'input[name="plan"]:checked'
            );

        const contenido =
            document.querySelector(
                'input[name="contenido"]:checked'
            );

        if (!plan) {

            resumen.innerHTML =
            `
            <strong>
            Seleccione un plan
            </strong>
            `;

            return;
        }

        let nombrePlan = "";

        if (plan.value === "basico") {

            precio = 50000;
            nombrePlan = "Plan Básico";

        }

        if (plan.value === "intermedio") {

            precio = 100000;
            nombrePlan = "Plan Intermedio";

        }

        if (plan.value === "avanzado") {

            precio = 150000;
            nombrePlan = "Plan Avanzado";

        }

        let recargo = 0;

        if (
            contenido &&
            contenido.value === "origena"
        ) {

            recargo = 30000;
            precio += recargo;

        }

        resumen.innerHTML = `

        <h3>${nombrePlan}</h3>

        <p>
        Valor base:
        <strong>
        $${(precio - recargo).toLocaleString("es-CL")}
        </strong>
        </p>

        <p>
        Diseño instruccional:
        <strong>
        $${recargo.toLocaleString("es-CL")}
        </strong>
        </p>

        <hr>

        <h2>
        TOTAL ESTIMADO
        </h2>

        <h1 style="color:#2E7D32;">
        $${precio.toLocaleString("es-CL")}
        </h1>

        `;

    }

    planes.forEach(plan => {

        plan.addEventListener(
            "change",
            actualizarFormulario
        );

    });

    contenidos.forEach(contenido => {

        contenido.addEventListener(
            "change",
            actualizarFormulario
        );

    });

    actualizarFormulario();

});
