let calcular = 0
let estado = 1
let operador
let mostrar
let cantidad1 = 0
let cantidad2 = 0
let borrar = 'no'

// funcion de la calculadora
document.querySelector('.calcular').addEventListener('click', (e) => {
	let resultado = document.querySelector('.resultado').innerHTML
	
	if (e.target.classList.contains('num')) {
		if(borrar === 'si'){
			borrar = 'no'
			resultado = ''
		}
		if(resultado.length < 10) {
			MostrarEnPantalla(resultado,e.target)
		}
	}

	if (e.target.classList.contains('ac')) {
		Reiniciar()
	}

	if (e.target.classList.contains('ope')) {
		Operacion(resultado,e.target)
	}

	if (e.target.classList.contains('fun')) {
		Funciones(resultado,e.target)
	}
})

// mostrar numeros en pantalla
function MostrarEnPantalla(resultado,e) {
	if(resultado.length === 9 && e.innerHTML === '00') {
		resultado += '0'
	}
	else if(resultado[0] === '0' && resultado.length === 1 &&  e.innerHTML !== '.'){
		e.innerHTML === '00' ? resultado = '0' : resultado = e.innerHTML
	} // asegurar que no enpiese en cero
	else if(e.innerHTML === '.' && resultado.indexOf('.') !== -1){
		resultado = resultado
	} // para no repetir puto
	else if(resultado.length === 0 && e.innerHTML === '00'){
		resultado = '0'
	} // para que no comience en doble cero
	else if(e.innerHTML === '.' && resultado.length === 0){
		resultado = '0.'
	} // para que el punto no estee al inicio
	else{
		resultado += e.innerHTML
	} // mostrar en pantalla
	document.querySelector('.resultado').innerHTML = resultado
	console.log(resultado)
}

// determinar operacion
function Operacion(resultados,e) {
			cantidad1 = cantidad2
			cantidad2 = parseFloat(resultados)
	if(e.classList.contains('sumar')){
	// if(e.textContent.indexOf('+') !== -1){
		Sumar(resultados)
	}
	if(e.classList.contains('restar')){
	// if(e.textContent.indexOf('-') !== -1){
		Restar(resultados)
	}
	if(e.textContent.indexOf('x') !== -1){
		Mul(resultados)
	}
	if(e.textContent.indexOf('/') !== -1){
		Div(resultados)
	}
	if(e.textContent.indexOf('r') !== -1){
		Raiz(resultados)
	}
	if(e.textContent.indexOf('=') !== -1){
		if(estado >= 2){
			// cantidad1 = cantidad2
			// cantidad2 = parseFloat(resultados)
			ree(resultados)
			estado = 1
		}
	}
	if(e.textContent.indexOf('%') !== -1){
		Por(resultados)
	}
}

// funcion de funciones
function Funciones(resultados,e) {
	if(e.textContent.indexOf('-n') !== -1){
		Negativo(resultados)
	}
	if(e.textContent.indexOf('+n') !== -1){
		Positivo(resultados)
	}
	// if(e.classList.contains('borrar') || document.querySelector('img')){
	if(e.classList.contains('borrar')){
		Borrar1(resultados)
	}
	if(e.textContent.indexOf('MRC') !== -1){
		BorrarTodo(resultados)
	}
}

// pasar numeros a negativos
function Negativo(resultado) {
	if (resultado.indexOf('-') === -1) {
		mostrar = '-'+resultado
		document.querySelector('.resultado').innerHTML = mostrar
	}
}

// pasar numeros a negativos
function Positivo(resultado) {
	if (resultado.indexOf('-') !== -1) {
		mostrar = resultado.slice(1,resultado.length)
		document.querySelector('.resultado').innerHTML = mostrar
	}
}

// borrar un numero
function Borrar1(resultado) {
	mostrar = resultado.slice(0,resultado.length-1)
	document.querySelector('.resultado').innerHTML = mostrar
}

// borrar un numero
function BorrarTodo(resultado) {
	mostrar = resultado.slice(0)
	document.querySelector('.resultado').innerHTML = ''
}

// reiniciar la calculadora
function Reiniciar() {
		document.querySelector('.resultado').innerHTML = ''
		calcular = 0
		borrar = 'no'
		resultado = ''
		estado = 1
		cantidad1 = 0
		cantidad2 = 0
		mostrar = 0
}

// fucion de sumar
function Sumar(resultado) {
		if (estado === 1) {
			borrar = 'si'
			estado++
			operador = '+'
		}
		else {
			ree(resultado)
			operador = '+'
			console.log(cantidad1)
		}
}

// funcion de restar
function Restar(resultado) {
		if (estado === 1) {
			borrar = 'si'
			estado++
			operador = '-'
		}
		else {
			ree(resultado)
			operador = '-'
			console.log(cantidad1)
		}
}

// funcion de multiplicar
function Mul(resultado){
	if (estado === 1) {
		borrar = 'si'
		estado++
		operador = '*'
	}
	else {
		ree(resultado)
		operador = '*'
		console.log(cantidad1)
	}
}

// funcion de dividir
function Div(resultado){
	if (estado === 1) {
		borrar = 'si'
		estado++
		operador = '/'
	}
	else {
		ree(resultado)
		operador = '/'
		console.log(cantidad1)
	}
}

// funcion de raiz cuadrada
function Raiz(resultado){
	if (estado === 1) {
		borrar = 'si'
	}
	else {
		ree(resultado)
		console.log(cantidad1)
	}
	estado = 1
	mostrar = Math.sqrt(cantidad2)
	mostrar = new String(mostrar)
	if (mostrar.length > 10) {
		mostrar = mostrar.slice(0,10)
	}
	mostrar = parseFloat(mostrar)
	cantidad2 = mostrar
	document.querySelector('.resultado').innerHTML = mostrar
}

// calcular prosentaje
function Por(resultado){
	if (estado === 1) {
		borrar = 'si'
		estado++
		operador = '%'
	}
	else {
		ree(resultado)
		operador = '%'
		console.log(cantidad1)
	}
}

function ree(resultado){
	if (operador === '-'){ // restar
		mostrar = cantidad1 - cantidad2
	}
	if (operador === '+'){ // sumar
		mostrar = cantidad1 + cantidad2
	}
	if (operador === '*'){ // multiplicar
		mostrar = cantidad1 * cantidad2
	}
	if (operador === '/'){ // dividir
		mostrar = cantidad1 / cantidad2
	}
	if (operador === '%'){ // porsentaje
		mostrar = (cantidad1 / 100) * cantidad2
	}
	mostrar = new String(mostrar)
	if (mostrar.length > 10) {
		if (mostrar.indexOf('.') !== -1) {
			mostrar = mostrar.slice(0,10)
			mostrar = parseFloat(mostrar)
		}
		else{
			mostrar = 'ERRORLIMIT'
		}
	}else{
		mostrar = parseFloat(mostrar)
	}
		document.querySelector('.resultado').innerHTML = mostrar
		// if (typeof mostrar === 'string') {
		if (mostrar === 'ERRORLIMIT') {
			setTimeout(function(){
				Reiniciar()
			},1000)
		}
		cantidad2 = mostrar
		borrar = 'si'
}