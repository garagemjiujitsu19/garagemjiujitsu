// ================= MENU MOBILE =================
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".header .navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("fa-times");
    });

    // Fecha menu ao clicar em link (exceto botão vermelho)
    document.querySelectorAll(".header .navbar a:not(.btn-red)").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuBtn.classList.remove("fa-times");
        });
    });

    // Fecha menu ao rolar a página
    window.addEventListener("scroll", () => {
        navbar.classList.remove("active");
        menuBtn.classList.remove("fa-times");
    });
}

// ================= RESPONSÁVEL MENOR DE 18 =================
const idadeInput = document.getElementById("idade");
const responsavelContainer = document.getElementById("responsavel-container");
const responsavelInput = document.getElementById("responsavel");

if (idadeInput && responsavelContainer && responsavelInput) {
    idadeInput.addEventListener("input", () => {
        const idade = parseInt(idadeInput.value, 10);

        if (!isNaN(idade) && idade < 18) {
            responsavelContainer.style.display = "block";
            responsavelInput.required = true;
        } else {
            responsavelContainer.style.display = "none";
            responsavelInput.required = false;
        }
    });
}

// ================= SWIPERS =================
if (typeof Swiper !== "undefined") {
    new Swiper(".home-slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop: true,
        autoplay: { delay: 4000 },
        centeredSlides: true,
        pagination: { el: ".swiper-pagination", clickable: true }
    });

    new Swiper(".review-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        autoplay: { delay: 7500, disableOnInteraction: false },
        breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 }
        }
    });

    new Swiper(".blogs-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        autoplay: { delay: 7500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 }
        }
    });
}

// ================= MODAIS (VERSÃO MOBILE CORRETA) =================
function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("show");
    document.body.classList.add("modal-open");
}

function fecharModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

// Impede clique dentro do conteúdo fechar o modal
document.querySelectorAll(".modal-content").forEach(content => {
    content.addEventListener("click", e => {
        e.stopPropagation();
    });
});

// ================= TROCA DE FOTOS =================
function mostrarFoto(cor) {
    const fotos = {
        // Rash Guard
        preta: document.getElementById("foto-preta"),
        vermelha: document.getElementById("foto-vermelha"),
        tabela: document.getElementById("foto-tabela"),

        // Dryfit
        dryfit: document.getElementById("foto-dryfit"),
        tabela2: document.getElementById("foto-tabela2"),

        // Camisetas
        "preta-cam": document.getElementById("foto-preta-cam"),
        "cinza-cam": document.getElementById("foto-cinza-cam")
    };

    Object.values(fotos).forEach(foto => {
        if (foto) foto.classList.remove("active");
    });

    if (fotos[cor]) {
        fotos[cor].classList.add("active");
    }
}
