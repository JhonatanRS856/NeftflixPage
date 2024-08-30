const headerFixed = document.getElementById('header-fixed');
const navBar = document.getElementById('nav');
const abrirNav = document.getElementById('mostrarNav');

abrirNav.addEventListener('click', () => {
    navBar.classList.toggle('show-nav');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerFixed.style.background = "#151515";
    } else {
        headerFixed.style.background = "transparent";
    }
});

const carrusel = document.getElementById('carrusel');
const fila = document.getElementById('container-carrusel');
const cardsSlider = document.querySelectorAll('.card-slider');

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');




btnRight.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

btnLeft.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

const peliculas = [
    '../img/trending/img1.webp',
    '../img/trending/img2.jpeg',
    '../img/trending/img3.webp',
    '../img/trending/img4.jpeg',
    '../img/trending/img5.jpeg',
    '../img/trending/img6.jpeg',
    '../img/trending/img7.webp',
];

function generarcards() {
    carrusel.innerHTML = '';

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];

        const cardP = document.createElement('div');
        cardP.classList.add('card-slider');

        cardP.innerHTML = `
            <img src="${pelicula}" alt="">
            <div class="info-peli">
            <div class="span-buttons">
                <div class="flex gap-2">
                <span class="material-icons-sharp">
                    play_arrow
                </span>
                <span class="material-icons-sharp">
                    add
                </span>
                <span class="material-icons-sharp">
                    thumb_up
                </span>
                </div>
                <span class="material-icons-sharp flex">
                keyboard_arrow_down
                </span>
            </div>
            <div class="flex gap-2 items-center my-4 text-[15.4px]">
                <span class="todos-span border inline-flex">Todos</span>
                <span>5 Temporadas</span>
                <span class="border inline-flex hd-span">HD</span>
            </div>
            <div class="tags">
                <ul>
                <li>Numeros</li>
                <li><span class="separator"></span></li>
                <li>ABC</li>
                <li><span class="separator"></span></li>
                <li>Habilidades sociales</li>
                </ul>
            </div>
            </div>
        `;


        carrusel.append(cardP);
    }

    const cards = document.querySelectorAll('.card-slider');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', (e) => {
            const element = e.currentTarget;

            setTimeout(() => {
                // Solo elimina y agrega la clase si es necesario
                if (!element.classList.contains('hovered')) {
                    cards.forEach(peli => peli.classList.remove('hovered'));
                    element.classList.add('hovered');
                }
            }, 450);
        });
    });


    fila.addEventListener('mouseleave', () => {
        cards.forEach(peli => peli.classList.remove('hovered'));
    });
}

generarcards();





// const sliders = document.querySelectorAll('.swiper-slide');

// sliders.forEach(slider => {
//     slider.addEventListener('mouseover', function() {
//         slider.classList.add('hovered');
//         const img = slider.querySelector('img');
//         const infoPeli = slider.querySelector('.info-peli');
//         infoPeli.classList.add('hovered');
//         img.style.borderRadius = "6px 6px 0px 0px";
//     });

//     slider.addEventListener('mouseout', function() {
//         slider.classList.remove('hovered');
//         const infoPeli = slider.querySelector('.info-peli');
//         infoPeli.classList.remove('hovered');
//     });
// });
