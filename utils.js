function obtenerGastoDelCliente(cliente) {
	let duracionTotalDelCliente = 0
	

	for (let j = 0; j < cliente.grabaciones.length; j++) { // recorremos grabaciones
		const grabacion = cliente.grabaciones[j]

		// la duracion total de grabaciones tiene que ser igual a la suma de todas las duraciones de grabaciones	

		duracionTotalDelCliente += grabacion.duracion
	}	

	return duracionTotalDelCliente * COSTO_POR_HORA 
}
