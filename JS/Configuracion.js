/**
 * @author joakin
 */
const tableBody = document.getElementById("tablaBody");
const valores = [
    {
        Nombre: "Elemento 3",
        Descripcion: "Descripción 3",
        Num_serie: "789",
        Estado: "Activo",
        Prioridad: "Baja",
    },
    {
        Nombre: "Elemento 3",
        Descripcion: "Descripción 3",
        Num_serie: "789",
        Estado: "Activo",
        Prioridad: "Baja",
    },
    {
        Nombre: "Martillo",
        Descripcion: "Este martillo las clava bien y a los tornillo tambien",
        Num_serie: "34812459",
        Estado: "Activo",
        Prioridad: "Baja",
    },
    {
        Nombre: "Tractor",
        Descripcion: "El mejor tractor de la historia porque sube arboles y los poda",
        Num_serie: "78234219",
        Estado: "Activo",
        Prioridad: "Alta",
    },
];



// Función para agregar elementos del array y el botón eliminar
function agregarElementosATabla(valores) {
    for (const valor of valores) {
        const fila = document.createElement("tr");
        for (const clave in valor) {
            const celda = document.createElement("td");
            celda.textContent = valor[clave];
            fila.appendChild(celda);
        }
        // Creo una celda para añadir el botón x y la función de eliminar la fila entera
        const celdaAcciones = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.addEventListener("click", function () {
            const filaAEliminar = this.closest("tr");
            tableBody.removeChild(filaAEliminar);
        });
        celdaAcciones.appendChild(botonEliminar);
        fila.appendChild(celdaAcciones);

        tableBody.appendChild(fila);
    }
}
const inputFiltrar = document.getElementById("filtrar");
// Función para filtrar la tabla
function filtrarTabla() {
    const filtro = inputFiltrar.value.toLowerCase();
    const filas = tableBody.querySelectorAll("tr");

    filas.forEach((fila) => {
        const celdas = fila.querySelectorAll("td");
        const nombre = celdas[0].textContent.toLowerCase();
        const descripcion = celdas[1].textContent.toLowerCase();
        if (filtro.length > 3) {


            if (nombre.includes(filtro) || descripcion.includes(filtro)) {
                fila.classList.remove("oculto");
                fila.classList.add("color");
            } else {
                fila.classList.add("oculto");
                fila.classList.remove("color");

            }
        } else if (filtro.length == 0) {
            fila.classList.remove("oculto", "color");
        }

    });
}

inputFiltrar.addEventListener("input", filtrarTabla);
agregarElementosATabla(valores);
