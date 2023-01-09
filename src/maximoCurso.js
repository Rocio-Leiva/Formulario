function maximoCurso(array) {
    let maxCurso = 0
    array.forEach(alumno => {
        if(maxCurso < parseInt(alumno.curso)) {
            maxCurso = alumno.curso
        }
    })
    return parseInt (maxCurso)
}

export { maximoCurso };