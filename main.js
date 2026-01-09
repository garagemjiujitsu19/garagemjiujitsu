// ---------------- MENU ----------------
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

const idadeInput = document.getElementById('idade');
const responsavelContainer = document.getElementById('responsavel-container');
const responsavelInput = document.getElementById('responsavel');

idadeInput.addEventListener('input', () => {
  const idade = parseInt(idadeInput.value, 10);
  if (!isNaN(idade) && idade < 18) {
    responsavelContainer.style.display = 'block';
    responsavelInput.required = true;
  } else {
    responsavelContainer.style.display = 'none';
    responsavelInput.required = false;
  }
});


// ---------------- SWIPERS ----------------
var swiperHome = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: { delay: 4000 },
    centeredSlides: true,
    pagination: { el: ".swiper-pagination", clickable: true },
});

var swiperReview = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 7500, disableOnInteraction: false },
    breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 } },
});

var swiperBlogs = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 7500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 } },
});

// ---------------- MODAIS E TROCA DE IMAGENS ----------------
function abrirModal(id) {
    document.getElementById(id).classList.add("show");
}

function fecharModal(id) {
    document.getElementById(id).classList.remove("show");
}

function mostrarFoto(cor) {
    const fotos = {
        // Rash Guard
        preta: document.getElementById('foto-preta'),
        vermelha: document.getElementById('foto-vermelha'),
        tabela: document.getElementById('foto-tabela'),
        // Dryfit
        dryfit: document.getElementById('foto-dryfit'),
        tabela2: document.getElementById('foto-tabela2'),
        // Camisetas
        "preta-cam": document.getElementById('foto-preta-cam'),
        "cinza-cam": document.getElementById('foto-cinza-cam')
    };

 Object.values(fotos).forEach(f => f?.classList.remove('active'));
fotos[cor]?.classList.add('active');


// ---------------- FECHAR MODAL AO CLICAR FORA ----------------
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // só fecha se clicar no fundo
            modal.classList.remove('show');
        }
    });
});
}
