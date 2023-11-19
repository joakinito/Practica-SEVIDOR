document.addEventListener("DOMContentLoaded", function() {
    const tablaElementos = document.getElementById("tablaBody");
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
            Descripcion: "Este martillo las clava bien y a los tornillos también",
            Num_serie: "34812459",
            Estado: "Activo",
            Prioridad: "Baja",
        },
        {
            Nombre: "Tractor",
            Descripcion: "El mejor tractor de la historia porque sube árboles y los poda",
            Num_serie: "78234219",
            Estado: "Activo",
            Prioridad: "Alta",
        },
    ];

    function agregarElementosATabla(valores) {
        for (const valor of valores) {
            const fila = document.createElement("tr");
            for (const clave in valor) {
                const celda = document.createElement("td");
                celda.textContent = valor[clave];
                fila.appendChild(celda);
            }

            const celdaEliminar = document.createElement("td");
            const botonEliminar = document.createElement("input");
            botonEliminar.type = "button";
            botonEliminar.value = "X";
            botonEliminar.addEventListener("click", function () {
                const filaAEliminar = this.closest("tr");
                tablaElementos.removeChild(filaAEliminar);
            });
            
            celdaEliminar.appendChild(botonEliminar);
            fila.appendChild(celdaEliminar);

            const celdaEditar = document.createElement("td");
            const botonEditar = document.createElement("input");
            botonEditar.type = "button";
            botonEditar.value = "Editar";
           
            botonEditar.addEventListener("click", function () {
                const filaAEditar = this.closest("tr");
                editarFila(filaAEditar);
            });
            celdaEditar.appendChild(botonEditar);
            fila.appendChild(celdaEditar);

            tablaElementos.appendChild(fila);
        }
    }
   

    function editarFila(fila) {
        const celdas = fila.querySelectorAll("td");
        const nombre = celdas[0].textContent;
        const descripcion = celdas[1].textContent;
        const numSerie = celdas[2].textContent;
        const estado = celdas[3].textContent;
        const prioridad = celdas[4].textContent;

        document.getElementById("nombre").value = nombre;
        document.getElementById("descripcion").value = descripcion;
        document.getElementById("numSerie").value = numSerie;
        document.getElementById("estado").value = estado;
        document.getElementById("prioridad").value = prioridad;
        
        guardarBtn.onclick = function () {
            const index = Array.from(tablaElementos.children).indexOf(fila);
            valores[index].Nombre = document.getElementById("nombre").value;
            valores[index].Descripcion = document.getElementById("descripcion").value;
            valores[index].Num_serie = document.getElementById("numSerie").value;
            valores[index].Estado = document.getElementById("estado").value;
            valores[index].Prioridad = document.getElementById("prioridad").value;
            document.getElementById("nombre").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("numSerie").value = "";
            document.getElementById("estado").value = "";
            document.getElementById("prioridad").value = "";
            tablaElementos.innerHTML = "";
            agregarElementosATabla(valores);
        };
    }



    const inputFiltrar = document.getElementById("filtrar");
    function filtrarTabla() {
        const filtro = inputFiltrar.value.toLowerCase();
        const filas = tablaElementos.querySelectorAll("tr");

        filas.forEach((fila) => {
            const celdas = fila.querySelectorAll("td");
            const nombre = celdas[0].textContent.toLowerCase();
            const descripcion = celdas[1].textContent.toLowerCase();
            if (filtro.length >= 3) {
                if (nombre.includes(filtro) || descripcion.includes(filtro)) {
                    fila.classList.remove("oculto");
                    fila.classList.add("color");
                } else {
                    fila.classList.add("oculto");
                    fila.classList.remove("color");
                }
            } else if (filtro.length === 0) {
                fila.classList.remove("oculto", "color");
            }
        });
    }

    inputFiltrar.addEventListener("input", filtrarTabla);
    agregarElementosATabla(valores);
});