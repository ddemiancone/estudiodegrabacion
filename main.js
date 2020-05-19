const COSTO_POR_HORA = 100 

function obtenerDeudores(clientes) {
	deudores = []
	clientesEnRegla = []

	for (let i = 0; i < clientes.length; i++) { // recorremos la lista de clientes
		const cliente = clientes[i]

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


function comparar(a, b) {
	return b.gasto - a.gasto
}

function obtenerMejoresCincoClientes(clientes) {
	const gastosDelCliente = []

	for (let i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		gastosDelCliente.push({
			nombre: cliente.nombre,
			gasto: obtenerGastoDelCliente(cliente),
		})

		const mejoresCinco = gastosDelCliente.sort(comparar)
	}

	//const mejoresCinco = gastosDelCliente.slice(0, 4)

	console.log(gastosDelCliente)
	return gastosDelCliente
}	

/* LLevar registro contable del lugar, poder acceder rapidamente a la
cantidad de grabaciones hechas por ejemplo en febrero de 2020.
	Para hacer esto deberiamos buscar cliente por cliente las
	fechas de las grabaciones y agruparlas para buscar en ellas, y
	seleccionar las que se llevaron a cabo en dicho mes. */


function listaDeFechas(listaDeClientes) {
	fechasEnLista = [] // declaro array vacio para despues llenarlo con las fechas

	for(let i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		for(let j = 0; j < cliente.grabaciones.length; j++) {
			const grabacion = cliente.grabaciones[j]
			
			fechasEnLista.push(grabacion.fecha) // pusheo las fechas al array vacio
		}
	}

	return fechasEnLista
}

function obtenerFacturacionEn(listaDeClientes, month, year) {
	let facturacion = 0
	for (i = 0; i < clientes.length; i++) {
		const cliente = clientes[i]

		for (j = 0; j < cliente.pagos.length; j++) {
			const pago = cliente.pagos[j]

			if (pago.fecha.includes(month) && pago.fecha.includes(year)) {
				facturacion = facturacion + pago.monto
			}
		}
	}

	console.log('en ' + month + '/' + year + ' se facturo ' + facturacion)
	return facturacion
}

function obtenerFechaABuscar(month, year) {
	if (month > 9) {
		return month + '/' + year
	} else return '0' + month + '/' + year
}

function obtenerGrabacionesPorFecha(listaDeFechas, month, year) {
	grabacionesPorFecha = []
	for(let i = 0; i < listaDeFechas.length; i++) {
		fecha = listaDeFechas[i]
		aBuscar = obtenerFechaABuscar(month, year)

		if (fecha.includes(aBuscar)) {
			grabacionesPorFecha.push(fecha)
		}
	}

	console.log('Se realizaron ' + grabacionesPorFecha.length + ' grabaciones en ' + month + '/' + year)
	return grabacionesPorFecha
}













