// Función para renderizar un superhéroe individual en formato JS
export function renderizarSuperheroe(superheroe) {
    return JSON.stringify(superheroe, null, 2);
}

// Función para renderizar la lista de superhéroes en formato JSON. NO RENDER
export function renderizarListaSuperheroes(superheroes) {
    return JSON.stringify(superheroes, null, 2);
}