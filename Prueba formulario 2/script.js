// Función que se ejecuta cuando se selecciona un modelo de auto
function seleccionarModelo() {
	// Obtener el valor del modelo seleccionado
	var modelo = document.getElementById('modelo').value;
  
	// Obtener el elemento donde se mostrará la información del vehículo
	var informacionVehiculo = document.getElementById('informacion-vehiculo');
  
	// Mostrar la información correspondiente según el modelo seleccionado
	if (modelo === 'sedan') {
	  informacionVehiculo.innerHTML = '<p><strong>Modelo seleccionado:</strong> Sedán</p><p><strong>Precio:</strong> $30,000</p>';
	} else if (modelo === 'hatchback') {
	  informacionVehiculo.innerHTML = '<p><strong>Modelo seleccionado:</strong> Hatchback</p><p><strong>Precio:</strong> $35,000</p>';
	} else if (modelo === 'suv') {
	  informacionVehiculo.innerHTML = '<p><strong>Modelo seleccionado:</strong> SUV</p><p><strong>Precio:</strong> $40,000</p>';
	} else {
	  informacionVehiculo.innerHTML = '';
	}
  }
  
  // Función que se ejecuta cuando se envía el formulario de datos personales
  function comprarAuto(event) {
	event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
	// Obtener los valores de los campos del formulario
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value;
	var telefono = document.getElementById('telefono').value;
	var direccion = document.getElementById('direccion').value;
	var ciudad = document.getElementById('ciudad').value;
  
	// Validar que todos los campos estén completos
	if (!nombre || !email || !telefono || !direccion || !ciudad) {
	  alert('Por favor complete todos los campos antes de continuar.');
	} else {
	  // Si todos los campos están completos, mostrar un mensaje de compra exitosa
	  alert('¡Compra realizada con éxito! Gracias por su compra, ' + nombre + '. Nos pondremos en contacto con usted a la brevedad.');
	}
  }
  
  // Asignar las funciones correspondientes a los eventos
  document.getElementById('modelo').addEventListener('change', seleccionarModelo);
  document.getElementById('formulario-datos').addEventListener('submit', comprarAuto);
  