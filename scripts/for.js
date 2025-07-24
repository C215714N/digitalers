execute = confirm("¿Deseas cargar una lista de alumnos?")
if (execute){
    let ul = document.getElementById("for");
    let total = prompt("Ingrese el total de alumnos");
    let alumnos = [];
    let notas = [];

    for (let i = 0; i < total; i++) {
        alumnos[i] = prompt("Ingrese el nombre del alumno "+(i+1));
        notas[i] = prompt("Ingrese la Nota de " + alumnos[i]);
        // string literal (string template)
        ul.innerHTML+= `
        <li>
            <strong>Alumno:</strong> ${alumnos[i]} - 
            <em>Nota:</em> ${notas[i]}
        </li>`;
    }
}
let languages = ["html", "css", "js", "php", "sql", "python", "java"];
let p = document.getElementById("for_of");

p.innerHTML+="Algunos de los lenguajes que se manejan en la web son: "
for (let lang of languages) p.innerHTML += ` ${lang} - `
p.innerHTML+=" etc...";