$(()=>{

    let divContacto = document.getElementById("divContacto")

    document.getElementById("botonContacto").addEventListener("click", () => {
        fetch('../sucursales.json')
        .then(response => response.json())
        .then(data => {
            divContacto.innerHTML += `<h2>Encontranos en:</h2>`
            for (sucursal of data) {
                divContacto.innerHTML += `
                    <div id="${sucursal._id}" class="sucursales"> 
                        <p>Dirección: ${sucursal.address} </p>
                        <p>Mail: ${sucursal.email} </p>
                        <p>Teléfono: ${sucursal.phone} </p>
                    </div>
                ` 
            }
            
        })
    })
})