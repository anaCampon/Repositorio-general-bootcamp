const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
for (let item of users) {
    if (item.years < 18) {
        console.log("Usuario menor de edad: " + item.name)
    }
}
for (let item of users) {
    if (item.years >= 18) {
        console.log("Usuario mayor de edad: " + item.name)
    }
}
