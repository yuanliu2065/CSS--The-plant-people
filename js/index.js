// Añade una animación a los anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar popup
document.getElementById('tellMore').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'inline';
});

// Cerrar popup
document.getElementById('cerrarPopup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none'
});

// Añadir plantas dinámicamente
const plantas = [
    {
        name: 'Fiddle leaf fig #1',
        price: 23.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #2',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #3',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #4',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #5',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #6',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #7',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #8',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
    {
        name: 'Fiddle leaf fig #9',
        price: 53.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 43.96,
        photo: 'img/plant-2.jpg'
    },
    {
        name: 'Fiddle leaf fig',
        price: 53.96,
        photo: 'img/plant-3.jpg'
    },
];

const boxCnt = document.getElementById('product-boxes');
let indiceCajas = 0;
let numeroCajas = 3;

function cargarPlantas(inicio, fin) {
    if (inicio >= plantas.length) {
        inicio = 0;
        fin = numeroCajas;
    }
    boxCnt.innerHTML = '';
    plantas.slice(inicio, fin).forEach(planta => {
        let node = document.createElement('div');
        node.classList.add('product-box');
        node.innerHTML = `
            <div class="product__img">
                <img src="${planta.photo}" alt="plant" class="product__img--plant">
            </div>
            <div class="product__inf">
                <div class="product__name">
                    ${planta.name}
                </div>
                <div class="product__price">
                    from &#36;${planta.price}
                </div>
            </div>`;
        boxCnt.appendChild(node);
    });
    indiceCajas = fin;
}

cargarPlantas(indiceCajas, numeroCajas);

// Cargar más plantas
document.getElementById('next-plantas').addEventListener('click', () => {
    cargarPlantas(indiceCajas, indiceCajas + numeroCajas);
});