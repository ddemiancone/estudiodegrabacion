function obtenerGastoDelCliente(cliente) {
	let duracionTotalDelCliente = 0
	

	for (let j = 0; j < cliente.grabaciones.length; j++) { // recorremos grabaciones
		const grabacion = cliente.grabaciones[j]

		// la duracion total de grabaciones tiene que ser igual a la suma de todas las duraciones de grabaciones	

		duracionTotalDelCliente += grabacion.duracion
	}	

	return duracionTotalDelCliente * COSTO_POR_HORA 
}

function obtenerFechaABuscar(month, year) {
	if (month > 9) {
		return month + '/' + year
	} else return '0' + month + '/' + year
}

function comparar(a, b) {
	return b.gasto - a.gasto
}

function obtenerGrabacionesTotales(listaDeClientes) {
	const listaDeGrabaciones = []
	let grabacionesTotales = 0

	for (i = 0; i < listaDeClientes.length; i++) {
		const cliente = listaDeClientes[i]

		for (j = 0; j < cliente.grabaciones.length; j++) {
			const grabacion = cliente.grabaciones[j]


			listaDeGrabaciones.push(grabacion)
		}
	}

	grabacionesTotales = listaDeGrabaciones.length
	return grabacionesTotales
}

/* 
- para acceder a la cantidad de meses recorremos la lista de fechas que teniamos
- vamos a guardar en una lista de meses las fechas pero borrandole los primeros TRES caracteres
- si hay repetidos los eliminamos (con ...newSet)
- una vez hecho todo lo anterior ponemos todo en una segunda lista que es la definitiva
- EL TAMAÑO DE ESTA LISTA SERA LA CANTIDAD DE MESES EN LOS QUE HUBO GRABACIONES
- ESTA VA A SER TAMBEIN LA CANTIDAD POR LA QUE VAMOS A DIVIDIR LAS GRABACIONES  
*/


function obtenerListaDeMeses(listaDeFechas) {
	const todosLosMeses = []

	for (let i = 0; i < misFechas.length; i++) {
		let fechaTotal = misFechas[i]

		diaMesAnio = fechaTotal.replace(fechaTotal[0], '')
		dMesAnio = diaMesAnio.replace(diaMesAnio[0], '')
		mesAnio = dMesAnio.replace(dMesAnio[0], '')

		todosLosMeses.push(mesAnio)
	}

	const listaDeMeses = [...new Set(todosLosMeses)]

	return listaDeMeses
}



