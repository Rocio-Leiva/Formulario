function maximaEdad(array) {
    let maxEdad = 0
    array.forEach(alumno => {
        if(maxEdad < parseInt(alumno.edad)) {
            maxEdad = alumno.edad
        }
    })
    return parseInt (maxEdad)
}

export { maximaEdad };