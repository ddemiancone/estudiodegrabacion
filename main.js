const COSTO_POR_HORA = 100 

function obtenerDeudores(listaDeClientes) {
	deudores = []
	clientesEnRegla = []

	for (let i = 0; i < listaDeClientes.length; i++) { // recorremos la lista de clientes
		const cliente = listaDeClientes[i]

		const gastoTotalDelCliente = obtenerGastoDelCliente(cliente)
			
		let pagoTotalDelCliente = 0

		for (let j = 0; j < cliente.pagos.length ; j++) { // recorremos pagos
			const pago = cliente.pagos[j]

			// el total gastado por cliente tiene que ser igual a la suma de TODOS los montos

			pagoTotalDelCliente += pago.monto 
		}


		const deudaDelCliente = gastoTotalDelCliente - pagoTotalDelCliente

		/* si la deuda es mayor a 0 que nos de nombre, telefono y monto a pagar y
			nos pushee el deudor a un objeto de deudores... y si no debe que lo
			pushee a un objeto de clientes en regla, con nombre y estado */

		if (deudaDelCliente > 0) { 
			deudores.push({
				nombre: cliente.nombre,
				telefono: cliente.telefono,
				monto_a_pagar: deudaDelCliente,
			})
		} else {
				clientesEnRegla.push({
					nombre: cliente.nombre,
					estado: 'Todo al dia'
				})
			}	
	}

	console.log(deudores)
	console.log(clientesEnRegla)

	return deudores
}

function obtenerMejoresCincoClientes(listaDeClientes) {
	const gastosDelCliente = []

	for (let i = 0; i < listaDeClientes.length; i++) {
		const cliente = listaDeClientes[i]

		gastosDelCliente.push({
			nombre: cliente.nombre,
			gasto: obtenerGastoDelCliente(cliente),
		})

		const mejoresCinco = gastosDelCliente.sort(comparar)
	}

	const mejoresCinco = gastosDelCliente.slice(0, 5)

	console.log(mejoresCinco)
	return mejoresCinco
}	

/* LLevar registro contable del lugar, poder acceder rapidamente a la
cantidad de grabaciones hechas por ejemplo en febrero de 2020.
	Para hacer esto deberiamos buscar cliente por cliente las
	fechas de las grabaciones y agruparlas para buscar en ellas, y
	seleccionar las que se llevaron a cabo en dicho mes. */


function listaDeFechas(listaDeClientes) {
	fechasEnLista = [] // declaro array vacio para despues llenarlo con las fechas

	for(let i = 0; i < listaDeClientes.length; i++) {
		const cliente = listaDeClientes[i]

		for(let j = 0; j < cliente.grabaciones.length; j++) {
			const grabacion = cliente.grabaciones[j]
			
			fechasEnLista.push(grabacion.fecha) // pusheo las fechas al array vacio
		}
	}

	return fechasEnLista
}

function obtenerFacturacionEn(listaDeClientes, month, year) {
	let facturacion = 0
	for (i = 0; i < listaDeClientes.length; i++) {
		const cliente = listaDeClientes[i]

		for (j = 0; j < cliente.pagos.length; j++) {
			const pago = cliente.pagos[j]

			aBuscar = obtenerFechaABuscar(month, year)

			if (pago.fecha.includes(aBuscar)) {	
				facturacion = facturacion + pago.monto
			}
		}
	}

	if (facturacion < 1) {
		console.log('En este mes no hubo facturaciones')
	} else 	console.log('en ' + month + '/' + year + ' se facturaron ' + '$' + facturacion)

	return facturacion
}


/* para obtener un promedio de grabaciones de la proxima semana debemos
	- sumar las grabaciones de TODOS los meses
	- dividir dicho resultado por la cantidad de meses que haya
	- dividir este resultado por cuatro (cantidad de semanas en un mes)
*/

function sacarPromedio(listaDeClientes) {
	let promedio = 0
	const grabacionesTotales = obtenerGrabacionesTotales(clientes) // 32	
	const listaDeMeses = obtenerListaDeMeses(misFechas) // 8
	let promedioGrabXMes = 0

	promedioGrabXMes = grabacionesTotales / listaDeMeses.length // 4

	promedio = promedioGrabXMes / 4 // 1

	console.log('El promedio de grabaciones por semana es de ' + promedio)
	return promedio
}

// EXTRA:

function obtenerGrabacionesPorMes(listaDeFechas, month, year) {
	grabacionesPorMes = []
	for(let i = 0; i < listaDeFechas.length; i++) {
		fecha = listaDeFechas[i]
		aBuscar = obtenerFechaABuscar(month, year)

		if (fecha.includes(aBuscar)) {
			grabacionesPorMes.push(fecha)
		}
	}

	if (grabacionesPorMes.length < 1) {
		console.log('En este mes no se realizaron grabaciones')
	} else console.log('Se realizaron ' + grabacionesPorMes.length + ' grabaciones en ' + month + '/' + year)

	return grabacionesPorMes
}


















