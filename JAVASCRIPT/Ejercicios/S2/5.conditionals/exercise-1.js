const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
for (var i=0; i < alumns.length; i++){
    if ((alumns[i].T1 + alumns[i].T2 + alumns[i].T3) >=2) {
        console.log(alumns[i].name + " - Aprobado");
        alumns[i].isAproved = true;

    }
    else{
        console.log(alumns[i].name + " - Suspenso");
        alumns[i].isAproved = false;
    }
}
console.log(alumns)