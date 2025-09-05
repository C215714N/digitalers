const person = {
    name: "cristian",
    age: 34,
    saludoConContexto: function(){
        console.log("contexto",this);
    },
    saludoSinContexto: (name, age) => {
        console.log("contexto", this);
    }
}

person.saludoConContexto();
person.saludoSinContexto();

const [a, b] = [ ["a","b","c"], [1,2,3,4] ]
const { age:edad } = person
const newPerson = person;
const c = [...a, ...b]
console.log(typeof c, c);
console.log("la edad del usuario es: ", edad);