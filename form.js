const formulario = document.getElementById('formulario');
const modelo = document.getElementById('modelo');
const infoModelo = document.getElementById('info-modelo');
const nextPage1 = document.getElementById('next-page-1');
const prevPage2 = document.getElementById('prev-page-2');
const nextPage2 = document.getElementById('next-page-2');
const prevPage3 = document.getElementById('prev-page-3');
const confirmModelo = document.getElementById('confirm-modelo');
const confirmNombre = document.getElementById('confirm-nombre');
const confirmCorreo = document.getElementById('confirm-correo');
const confirmTelefono = document.getElementById('confirm-telefono');

// Información de los modelos de auto
const modelos = {
	sedan: {
		nombre: 'Sedan',
		precio: '$20,000',
		info: 'El Sedan es un automóvil compacto de cuatro puertas con espacio para 5 personas.'
	},
	coupe: {
		nombre: 'Coupe',
		precio: '$25,000',
		info: 'El Coupe es un automóvil con estilo deportivo, con dos puertas y asientos para dos personas.'
    },suv: {
		nombre: 'SUV',
		precio: '$30,000',
		info: 'El SUV es un vehículo utilitario deportivo con espacio para 7 personas.'
	}
        }

// Ocultar todas las páginas, excepto la primera
document.getElementById('page-1').classList.add('show');

// Mostrar información sobre el modelo de auto seleccionado
modelo.addEventListener('change', () => {
	const seleccion = modelo.value;
	if (seleccion === '') {
		infoModelo.innerHTML = '<p>Por favor seleccione un modelo para obtener más información.</p>';
	} else {
		infoModelo.innerHTML = `
			<h3>${modelos[seleccion].nombre}</h3>
			<p><strong>Precio:</strong> ${modelos[seleccion].precio}</p>
			<p>${modelos[seleccion].info}</p>
		`;
	}
	});

// Navegación del formulario
nextPage1.addEventListener('click', () => {
	const seleccion = modelo.value;
	if (seleccion) {
		document.getElementById('page-1').classList.remove('show');
		document.getElementById('page-2').classList.add('show');
	}
});

prevPage2.addEventListener('click', () => {
	document.getElementById('page-2').classList.remove('show');
	document.getElementById('page-1').classList.add('show');
});

nextPage2.addEventListener('click', () => {
	const nombre = document.getElementById('nombre').value;
	const correo = document.getElementById('correo').value;
	const telefono = document.getElementById('telefono').value;
	if (nombre && correo && telefono) {
		const seleccion = modelo.value;
		document.getElementById('confirm-modelo').textContent = modelos[modelo.value].nombre;
		document.getElementById('info-modelo-confirm').textContent = modelos[seleccion].info; // Agregar información del modelo al resumen de la compra
		document.getElementById('confirm-nombre').textContent = nombre;
		document.getElementById('confirm-correo').textContent = correo;
		document.getElementById('confirm-telefono').textContent = telefono;
		document.getElementById('page-2').classList.remove('show');
		document.getElementById('page-3').classList.add('show');
	}
});

prevPage3.addEventListener('click', () => {
	document.getElementById('page-3').classList.remove('show');
	document.getElementById('page-2').classList.add('show');
});

// Mostrar alerta de confirmación al enviar el formulario
formulario.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('¡Gracias por su compra!');
});

