//-------------------------Secccion de nosotros------------------------------------------

//Creo array para guardar las opiniones de los clientes
let opinionesArray = []
let form = document.getElementById('formularioNosotros')


$(() => {

    $("#formularioNosotros").on("submit",(e) => {
        e.preventDefault()
        let formValues = new FormData(e.target)
        let nuevoMensaje = {nombre: formValues.get("nombreUsuario"), producto: formValues.get("productoComprado"), opinion: formValues.get("opinionUsuario")}
        form.reset()
        opinionesArray.push(nuevoMensaje)
        console.log(opinionesArray)
        localStorage.setItem("Mensaje", JSON.stringify(opinionesArray))
        
    })

    $("#mostrarOpiniones").click(()=> {
    // Muestro los valores ingresados mediante evento de click
    let divOpiniones = document.createElement("div")
    divOpiniones.className = 'divOpiniones'
    for (opiniones of opinionesArray) {
        divOpiniones.innerHTML +=     `
        <p> Nombre: ${opiniones.nombre} </p>
        <p> Producto: ${opiniones.producto} </p>
        <p> Mensaje: ${opiniones.opinion} </p><br>
    `
    }
    contenido.appendChild(divOpiniones)
    })
})