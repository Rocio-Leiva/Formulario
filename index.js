let listaAlumnado = [];

let objAlumnado = {
    id: '',
    nombre:'',
    curso:'',
    edad: ''
}
// agregar o actualizar la info
let editando = false;

let formulario = document.querySelector('#formulario');
let nombreInput = document.querySelector('#nombre');
let cursoInput = document.querySelector('#curso');
let edadInput = document.querySelector('#edad');
let btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario() {
    if(nombreInput.value === '' || cursoInput.value === ''  || edadInput.value === '') {
        alert('Por favor, rellena todos los campos');
        return;
    }
    if(editando) {
        editarAlumnado();
        editando = false;
    }else{
        objAlumnado.id = Date.now();
        objAlumnado.nombre = nombreInput.value;
        objAlumnado.curso = cursoInput.value;
        objAlumnado.edad = edadInput.value;

        agregarAlumnado();
    }

}

function agregarAlumnado() {
    listaAlumnado.push({...objAlumnado});

    mostrarAlumnado();

    formulario.reset();

    limpiarObjeto();

}

function limpiarObjeto() {
    objAlumnado.id = '';
    objAlumnado.nombre = '';
    objAlumnado.curso = '';
    objAlumnado.edad = '';
}



//.div-Empleados donde vamos a guardarlos
function mostrarAlumnado() {

limpiarHTML();

    let divAlumnado = document.querySelector('.div-alumnado');

    listaAlumnado.forEach( alumnado => {
        let  {id, nombre, curso, edad} = alumnado;

        let parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${curso} - ${edad} - `;
        parrafo.dataset.id= id;

        let editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarAlumnado(alumnado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminaralumnado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        let hr = document.createElement('hr');

        divAlumnado.appendChild(parrafo);
        divAlumnado.appendChild(hr);

    })
}

function cargarAlumnado(alumnado){

    let {id, nombre, curso, edad} = alumnado;

    nombreInput.value = nombre;
    cursoInput.value = curso;
    edadInput.value = edad;

objAlumnado.id = id;

formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

editando = true;

}


function editarAlumnado() {
    objAlumnado.nombre = nombreInput.value;
    objAlumnado.curso = cursoInput.value;
    objAlumnado.edad = edadInput.value;

    listaAlumnado.map( alumnado => {

        if(alumnado.id === objAlumnado.id) {
            alumnado.id = objAlumnado.id;
            alumnado.nombre = objAlumnado.nombre;
            alumnado.curso = objAlumnado.curso;
            alumnado.edad = objAlumnado.edad;
        }

    });

    limpiarHTML();
    mostrarAlumnado();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminaralumnado(id) {
    listaAlumnado = listaAlumnado.filter(alumnado => alumnado.id !== id);

    limpiarHTML();
    mostrarAlumnado();
}

function limpiarHTML(){
    let divAlumnado = document.querySelector('.div-alumnado');
    while(divAlumnado.firstChild) {
        divAlumnado.removeChild(divAlumnado.firstChild);
    }
}