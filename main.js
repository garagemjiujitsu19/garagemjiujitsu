// ---------------- MENU ----------------
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});

// ---------------- RESPONSÁVEL MENOR DE 18 ----------------
const idadeInput = document.getElementById('idade');
const responsavelContainer = document.getElementById('responsavel-container');
const responsavelInput = document.getElementById('responsavel');

if(idadeInput){
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
}

// ---------------- SWIPERS ----------------
const swiperHome = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: { delay: 4000 },
    centeredSlides: true,
    pagination: { el: ".swiper-pagination", clickable: true },
});

const swiperReview = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 7500, disableOnInteraction: false },
    breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 } },
});

const swiperBlogs = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: { delay: 7500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 } },
});

// ---------------- MODAIS ----------------
function abrirModal(id){
    const modal = document.getElementById(id);
    if(modal) modal.classList.add('show');
}

function fecharModal(id){
    const modal = document.getElementById(id);
    if(modal) modal.classList.remove('show');
}

// ---------------- TROCA DE FOTOS ----------------
function mostrarFoto(cor){
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
    if(fotos[cor]) fotos[cor].classList.add('active');
}

// ---------------- MODAIS DOS TREINOS ----------------
document.querySelectorAll('.btn[data-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const modal = document.getElementById(btn.dataset.modal);
        if(modal) modal.classList.add('show');
    });
});

document.querySelectorAll('.modal .close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').classList.remove('show');
    });
});

// FECHAR MODAL AO CLICAR FORA
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if(e.target === modal) modal.classList.remove('show');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".header .navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector('i'); // seleciona o <i> dentro do botão
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

    // Fecha o menu ao clicar em um link (exceto btn-red)
    document.querySelectorAll(".header .navbar a:not(.btn-red)").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuBtn.querySelector('i');
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});
});
