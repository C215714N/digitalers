function callBackHell (param, callback){
    if (typeof param === 'object' && param !== null) {
        callback(param);
    }
    return param
}
//  JSON (JavaScript Object Notation)
const userData = {
    "nombre": "Cristian",
    "apellido": "Racedo",
    "edad": 34,
    "idiomas": [
        "Español", 
        "Ingles", 
        "Italiano", 
        "japones"
    ],
    "cursos": [
        { 
            "nombre": "nodeJS", 
            "clases": [
                {"dia": "miercoles", "horario": "19 a 22hs"},
                {"dia": "viernes", "horario": "19 a 22hs"},
            ]
        },
        {
            "nombre": "CCNA2",
            "clases": [
                {
                    "dia": "sabado", "horario": "10 a 13hs"
                }
            ]
        }
    ]
}

callBackHell(userData, (data) => {
    console.log("Nombre: " + data.nombre);
    callBackHell(data.idiomas, (idiomas) => {
        console.log("Idiomas: " + idiomas.join(", "));
        callBackHell(data.cursos, (cursos) => {
            cursos.forEach((curso) => {
                console.log("Curso: " + curso.nombre);
                callBackHell(curso.clases, (clases) => {
                    clases.forEach((clase) => {
                        console.log("Clase: " + clase.dia + " - " + clase.horario);
                    });
                });
            });
        });
    });
})