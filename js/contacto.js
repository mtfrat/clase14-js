$(()=>{

    let divContacto = document.getElementById("divContacto")
    let verificador = 0

    document.getElementById("botonContacto").addEventListener("click", () => {
        $.get("sucursales.json", (respuesta,estado) => {
            if (estado === "success") {
                while(verificador !==1){
                    divContacto.innerHTML += `<h2>Encontranos en:</h2>`
                    for (sucursal of respuesta) {
                        divContacto.innerHTML += `
                            <div class="sucursales"> 
                                <p>Dirección: ${sucursal.address} </p>
                                <p>Mail: ${sucursal.email} </p>
                                <p>Teléfono: ${sucursal.phone} </p>
                            </div>
                        ` 
                    }
                    verificador = 1
                }
            }
        })
    })
})