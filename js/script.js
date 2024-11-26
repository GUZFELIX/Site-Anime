document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link.
            const target = document.querySelector(this.getAttribute('href')); // Seleciona o destino.
            if (target) { // Verifica se o destino existe.
                target.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave.
                    block: 'start' // Posiciona o destino no topo da tela.
                });
            }
        });
    });

    // Seleciona os elementos do modal e do botão (trailer temporada)
const modal = document.getElementById("trailerModal");
const openBtn = document.getElementById("openTrailer");  // Certifique-se de ter um botão com esse ID
const closeBtn = document.getElementById("closeModal");
const youtubeVideo = document.getElementById("youtubeVideo");

// Função para abrir o modal e carregar o vídeo
openBtn.addEventListener("click", function() {
    modal.style.display = "block";
    // Carrega o link do vídeo dentro do iframe com autoplay
    youtubeVideo.src = "https://www.youtube.com/embed/wxcvbL6o55M?autoplay=1";  // Link do vídeo + autoplay
});

// Função para fechar o modal, mas sem afetar o botão
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    // Não remove o src do iframe até o modal ser reaberto
    youtubeVideo.src = "";
});

// Fechar o modal se clicar fora da área do conteúdo
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        // Também remove o src para parar o vídeo
        youtubeVideo.src = "";
    }
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Verifica se o modo foi salvo no localStorage
if(localStorage.getItem("theme")) {
    document.body.setAttribute("data-theme", localStorage.getItem("theme"));
}

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light"); // Salva a escolha
    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark"); // Salva a escolha
    }
}









