const juegos = [
    {
        titulo: "Amigos de Mierda", 
        imagen: "../IMAGENES/Amigos_de_mierda.png", 
        descripcion: "Si te picas eres como que gei.", 
        propietario: ["Judío","Roberto"], 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 3, max: 22}
    },
    {
        titulo: "Amigos de Mierda 2", 
        imagen: "../IMAGENES/Amigos_de_mierda2.png", 
        descripcion: "Si te picas eres como que más gei.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores:  {min: 3, max: 22}
    },
    {
        titulo: "Asamblea del Mal", 
        imagen: "../IMAGENES/Asamblea_del_mal.png", 
        descripcion: "Se necesita más gente que para el lobo base pero siempre se pueden hacer apaños.", 
        propietario: "Laura", 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca", "Media"], 
        jugadores: {min: 6, max: 12}
    },
    {
        titulo: "Aventureros al Tren Versión Europa", 
        imagen: "../IMAGENES/Av_tren.png", 
        descripcion: "El juego renfe, pero sin retrasos.", 
        propietario: ["Roberto", "Alba"], 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 5}
    },
    {
        titulo: "Aventureros al Tren Versión Iberia y Corea del Sur", 
        imagen: "../IMAGENES/Av_tren_iberia.png", 
        descripcion: "La expansión del juego renfe, esta vez en España, así que sí hay retrasos de una hora.", 
        propietario: "Alba", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 4}
    },
    {
        titulo: "Bang Duel", 
        imagen: "../IMAGENES/Bang_Duel.png", 
        descripcion: "Si eres el sherif siempre apuesta a por que el malo es el negro.", 
        propietario: "Roberto", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 2}
    },
    {
        titulo: "Bunny Hops", 
        imagen: "../IMAGENES/Bunny_hops.png", 
        descripcion: "Para jugar si te caen bien.", 
        propietario: ["Roberto", "Alba"], 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 4, max: 16}
    },  
    {
        titulo: "Burger ¡Ya!", 
        imagen: "../IMAGENES/burgerYa.png", 
        descripcion: "Como el Burger King, pero sin inmigrantes.", 
        propietario: "Alba", 
        dificultad: ["Fácil"], 
        duracion: ["Poca"], 
        jugadores: {min: 2, max: 5}
    },
    {
        titulo: "Burrito Lanzamiento", 
        imagen: "../IMAGENES/Burrito.png", 
        descripcion: "Jugar al matar con Burritos, este nombre es mejor.", 
        propietario: "Alba", 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca", "Media"], 
        jugadores: {min: 2, max: 6}
    },
  
    {
        titulo: "Catan Duel", 
        imagen: "../IMAGENES/Catan_Duelo.png", 
        descripcion: "No sé.", 
        propietario: "Roberto", 
        dificultad: "Media", 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 2}
    },

    {
        titulo: "Catan Plus", 
        imagen: "../IMAGENES/Catan_Plus.png", 
        descripcion: "No sé.", 
        propietario: "Judío", 
        dificultad: "Media", 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 5, max: 6}
    },

    {
        titulo: "Chao Pescao", 
        imagen: "../IMAGENES/Chao_pescao.png", 
        descripcion: "No sé.", 
        propietario: "Judío", 
        dificultad: ["Poca", "Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 4, max: 10}
    },

    {
        titulo: "Ciudadelas", 
        imagen: "../IMAGENES/Ciudadelas.png", 
        descripcion: "Algo de ciudades y corrupción.", 
        propietario: "Alba, Judío", 
        dificultad: ["Media","Mucha"], 
        duracion: "Media", 
        jugadores:  {min: 2, max: 3}
    },
    {
        titulo: "Código Secreto", 
        imagen: "../IMAGENES/Cod_Secreto.png", 
        descripcion: "Si hay una flor y una bestia, y dices de pista bestia. La respuesta es la flor.", 
        propietario: "Laura", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 8}
    },
    {
        titulo: "Contrabando", 
        imagen: "../IMAGENES/Contrabando.png", 
        descripcion: "Hay que saber hablar por lo menos, y dos ser un rapero de los que inventan una canción a partir de tres palabras.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores:  {min: 2, max: 8}
    },
    {
        titulo: "Dixit Disney", 
        imagen: "../IMAGENES/Dixit.png", 
        descripcion: "La mejor tarjeta es la de Winnie.", 
        propietario: "Roberto", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 3, max: 6}
    },
    {
        titulo: "Dooble Sanrio", 
        imagen: "../IMAGENES/Dooble_Sanrio.png", 
        descripcion: "Demasiados personajes de Sanrio, no recomendados para TDA.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 2, max: 6}
    },
    {
        titulo: "Dos", 
        imagen: "../IMAGENES/Dos.png", 
        descripcion: "No es UNO, es DOS.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 2, max: 6}
    },
    {
        titulo: "El Embustero", 
        imagen: "../IMAGENES/El_Embustero.png", 
        descripcion: "El impostor.", 
        propietario: "Judío", 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 4, max: 8}
    },
    {
        titulo: "Estofado", 
        imagen: "../IMAGENES/Estofado.png", 
        descripcion: "Putos mendigos.", 
        propietario: "Alba", 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 4}
    },
    {
        titulo: "Exploding Kitten", 
        imagen: "../IMAGENES/Exploding_kitten.png", 
        descripcion: "Juego gato, si matas gato, mueres.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 2, max: 6}
    },
    {
        titulo: "Fábulas de Peluches", 
        imagen: "../IMAGENES/Fab_peluches.png", 
        descripcion: "Peluches peleando con pesadillas modo rol, mu wapo.", 
        propietario: "Alba", 
        dificultad: ["Media", "Difícil"], 
        duracion: "Mucha", 
        jugadores: {min: 2, max: 4}
    },
    {
        titulo: "Honey Buzz", 
        imagen: "../IMAGENES/Honey_buzz.png", 
        descripcion: "Economía con abejitas.", 
        propietario: "Alba", 
        dificultad: ["Media", "Difícil"], 
        duracion: ["Media", "Mucha"], 
        jugadores: {min: 1, max: 4}
    },
    {
        titulo: "Joking Hazard", 
        imagen: "../IMAGENES/Joking_hazard.png", 
        descripcion: "El juego renfe, pero sin retrasos.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: ["Media", "Poca"], 
        jugadores: {min: 3, max: 6}
    },
    {
        titulo: "Jungle Speed", 
        imagen: "../IMAGENES/Jungle_speed.png", 
        descripcion: "Jugar con las uñas largas, es activar el modo sangriento.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 2, max: 8}
    },
    {
        titulo: "Linkee", 
        imagen: "../IMAGENES/Linkee.png", 
        descripcion: "Hay que ser listo, pero mucho.", 
        propietario: "Roberto", 
        dificultad: ["Fácil","Media","Difícil"], 
        duracion: ["Poca", "Media"], 
        jugadores: {min: 2, max: 30}
    },
    {
        titulo: "Lobo", 
        imagen: "../IMAGENES/Lobo.png", 
        descripcion: "Necesito amigos.", 
        propietario: "Alba", 
        dificultad: ["Medio","Fácil"], 
        duracion: "Media", 
        jugadores: {min: 5, max: 18}
    },
    {
        titulo: "Mal trago", 
        imagen: "../IMAGENES/Mal_trago.png", 
        descripcion: "Coma etílico al paso.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: "Media", 
        jugadores: {min: 5, max: 18}
    },
    {
        titulo: "Maldita Palabrita", 
        imagen: "../IMAGENES/Maldita_palabrita.png", 
        descripcion: "-4 puntos.", 
        propietario: "Judío", 
        dificultad: "Fácil", 
        duracion: "Media", 
        jugadores: {min: 3, max: 6}
    },
    {
        titulo: "Master Dater", 
        imagen: "../IMAGENES/Master_dater.png", 
        descripcion: "IG de la minita.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 3, max: 6}
    },
    {
        titulo: "Monopoly Españita", 
        imagen: "../IMAGENES/Monopoly_españita.png", 
        descripcion: "Corrupción española, tienen que cambiar al ladrón por moro.", 
        propietario: "Roberto", 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 6}
    },
    {
        titulo: "Muffin Time", 
        imagen: "../IMAGENES/Muffin_time.png", 
        descripcion: "Que chistosito.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 8}
    },
    {
        titulo: "Munchkin", 
        imagen: "../IMAGENES/Munchkin.png", 
        descripcion: "Subida de nivel por matar monstruos, pero el dinero siempre es la respuesta.", 
        propietario: "Roberto", 
        dificultad: ["Media", "Difícil"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 3, max: 6}
    },
    {
        titulo: "Ni sí ni no", 
        imagen: "../IMAGENES/Ni_si_ni_no.png", 
        descripcion: "Como acabar poniendo incómodo y romper relaciones de forma izy.", 
        propietario: "Alba", 
        dificultad: ["Fácil","Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 100}
    },
    {
        titulo: "Papa", 
        imagen: "../IMAGENES/papa.png", 
        descripcion: "Antojo por ver un vídeo de Infrecuentes.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 3, max: 8}
    },
    {
        titulo: "Pingüinos", 
        imagen: "../IMAGENES/penguin.png", 
        descripcion: "Ta bonito.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: ["Media"], 
        jugadores: {min: 2, max: 8}
    },
    {
        titulo: "Poker Sanrio", 
        imagen: "../IMAGENES/poker_sanrio.png", 
        descripcion: "Antoja perder todo nuestro dinero de forma tan linda.", 
        propietario: "Alba", 
        dificultad: ["Fácil","Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 1, max: 30}
    },
    {
        titulo: "Polilla Tramposa", 
        imagen: "../IMAGENES/polilla_tramp.png", 
        descripcion: "La carta está detrás del sofá. Ah, no, eso era otro juego.", 
        propietario: "Roberto", 
        dificultad: ["Fácil","Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 3, max: 5}
    },
    {
        titulo: "Potion Explosion", 
        imagen: "../IMAGENES/potion_explosion.png", 
        descripcion: "Bien chulo, canicas y colorines.", 
        propietario: "Alba", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 4}
    },
    {
        titulo: "Rainbow Stories", 
        imagen: "../IMAGENES/rainbow_stories.png", 
        descripcion: "Muy rosa y purpurina, eso es bueno pero hay que pensar.", 
        propietario: "Roberto", 
        dificultad: ["Fácil","Media", "Difícil"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 99}
    },

    {
        titulo: "Risk", 
        imagen: "../IMAGENES/Risk.png", 
        descripcion: "Validez de abandono: 1,1,1.", 
        propietario: "Judío", 
        dificultad: ["Media", "Difícil"], 
        duracion: ["Media", "Mucha"], 
        jugadores: {min: 2, max: 6}
    },
    {
        titulo: "Saboteur", 
        imagen: "../IMAGENES/saboteur.png", 
        descripcion: "Among Us con Pete.", 
        propietario: "Roberto", 
        dificultad: "Media", 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 7}
    },

    {
        titulo: "Sagrada", 
        imagen: "../IMAGENES/sagrada.png", 
        descripcion: "Difícil no perder esos 90 dados.", 
        propietario: "Alba", 
        dificultad: ["Difícil","Media"], 
        duracion: "Media", 
        jugadores: {min: 1, max: 4}
    },

    {
        titulo: "Sí Señor Oscuro", 
        imagen: "../IMAGENES/si_señor_oscuro.png", 
        descripcion: "Rol bien chulo de echar la culpa, el día a día de una conversación familiar.", 
        propietario: "Roberto", 
        dificultad: ["Fácil","Media"], 
        duracion: "Media", 
        jugadores: {min: 4, max: 8}
    },

    {
        titulo: "Splendor Duel", 
        imagen: "../IMAGENES/Splendor_Duel.png", 
        descripcion: "Brilli Brilli", 
        propietario: "Alba", 
        dificultad: "Media", 
        duracion: "Media", 
        jugadores: {min: 2, max: 2}
    },

    {
        titulo: "Spots", 
        imagen: "../IMAGENES/spots.png", 
        descripcion: "Mandarina Juego", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: "Media", 
        jugadores: {min: 1, max: 4}
    },

    {
        titulo: "Sushi GO", 
        imagen: "../IMAGENES/sushi_go.png", 
        descripcion: "Tiene mates, ooft.", 
        propietario: "Alba", 
        dificultad: ["Fácil", "Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 5}
    },

    {
        titulo: "Taco, Gato, Cabra, Queso, Pizza", 
        imagen: "../IMAGENES/taco,gato.png", 
        descripcion: "No sé.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: "Poca", 
        jugadores: {min: 3, max: 8}
    },

    {
        titulo: "The Mind", 
        imagen: "../IMAGENES/The_Mind.png", 
        descripcion: "No sé.", 
        propietario: "Roberto", 
        dificultad: ["Fácil","Media"], 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 4}
    },

    {
        titulo: "Tranvia Mortal", 
        imagen: "../IMAGENES/tranvia_mortal.png", 
        descripcion: "Matar o matar, tú eliges.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 3, max: 13}
    },

    {
        titulo: "Tranvia Mortal Expansión", 
        imagen: "../IMAGENES/tranvia_mortal_exp.png", 
        descripcion: "Ahora que prefieres, ¿Matar a los gitanos o matar ese 13% de la población?", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 3, max: 13}
    },

    {
        titulo: "UNO FLIP", 
        imagen: "../IMAGENES/uno_flip.png", 
        descripcion: "El UNO pero flipeando.", 
        propietario: "Roberto", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 10}
    },

    {
        titulo: "UNO Sanrio", 
        imagen: "../IMAGENES/uno_sanrio.png", 
        descripcion: "Apuesto por el rojo, que el negro no es de fiar.", 
        propietario: "Alba", 
        dificultad: "Fácil", 
        duracion: ["Poca","Media"], 
        jugadores: {min: 2, max: 10}
    },

    {
        titulo: "Villainous Disney", 
        imagen: "../IMAGENES/villainous_disney.png", 
        descripcion: "Por fin gana algún malo.", 
        propietario: ["Laura","Roberto"], 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 6}
    },

    {
        titulo: "Villainous Disney Síndrome", 
        imagen: "../IMAGENES/villainous_disney_lotso.png", 
        descripcion: "Lotso es el mejor.", 
        propietario: "Roberto", 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 6}
    },

    {
        titulo: "Villainous Disney Cruella", 
        imagen: "../IMAGENES/villainous_disney_pit.png", 
        descripcion: "¿Qué hace Pete aquí?", 
        propietario: "Roberto", 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 6}
    },

    {
        titulo: "Villainous Marvel", 
        imagen: "../IMAGENES/villainous_marvel.png", 
        descripcion: "Caldito de Thanos.", 
        propietario: "Roberto", 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 2, max: 6}
    },

    {
        titulo: "Zombicide 2nd", 
        imagen: "../IMAGENES/zombicide.png", 
        descripcion: "Es de cooperar, así que colaboren conchasumare", 
        propietario: "Roberto", 
        dificultad: ["Difícil","Media"], 
        duracion: ["Mucha","Media"], 
        jugadores: {min: 1, max: 6}
    },

    {
        titulo: "Zombies", 
        imagen: "../IMAGENES/Zombies.png", 
        descripcion: "No sé.", 
        propietario: "Laura", 
        dificultad: ["Difícil","Media"], 
        duracion: "Mucha", 
        jugadores: {min: 2, max: 6}
    },

];
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botonBuscar").addEventListener("click", filtrarJuegos);
});

function filtrarJuegos() {
    const propietario = Array.from(document.getElementById("propietario").selectedOptions).map(option => option.value);
    const dificultad = Array.from(document.getElementById("dificultad").selectedOptions).map(option => option.value);
    const duracion = Array.from(document.getElementById("duracion").selectedOptions).map(option => option.value);
    const jugadores = document.getElementById("jugadores").value;

    // Filtrar los juegos según los criterios seleccionados
    const juegosFiltrados = juegos.filter(juego => {
        // Verificar la dificultad
        const dificultadValida = dificultad.includes("Todos") || dificultad.some(d => juego.dificultad.includes(d));

        // Verificar la duración
        const duracionValida = duracion.includes("Todos") || duracion.some(d => juego.duracion.includes(d));

        // Verificar el número de jugadores
        const jugadoresValido = (
            (jugadores === "" || (jugadores >= juego.jugadores.min && jugadores <= juego.jugadores.max))
        );

        // Verificar los propietarios
        const propietarioValido = propietario.includes("Todos") || propietario.some(p => juego.propietario.includes(p));

        return (
            propietarioValido &&
            dificultadValida &&
            duracionValida &&
            jugadoresValido
        );
    });

    mostrarJuegos(juegosFiltrados);
}



function mostrarJuegos(juegos) {
    const juegosContainer = document.getElementById("juegosContainer");
    juegosContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los juegos filtrados

    if (juegos.length === 0) {
        juegosContainer.innerHTML = "<p>No se encontraron juegos con los criterios seleccionados.</p>";
        return;
    }

    juegos.forEach(juego => {
        const juegoDiv = document.createElement("div");
        juegoDiv.classList.add("juego");

        juegoDiv.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.titulo}">
            <h3>${juego.titulo}</h3>
            <p>${juego.descripcion}</p>
        `;

        juegosContainer.appendChild(juegoDiv);
    });
}

