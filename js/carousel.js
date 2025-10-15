// carousel.js

// Array que armazena os itens do carrossel
let carouselArr = [];

// Classe Carousel
class Carousel {
    constructor(img, title, link) {
        this.img = img;
        this.title = title;
        this.link = link;
    }

    // Inicia o carrossel
    static Start(arr) {
        
        if (arr && arr.length > 0) {0
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(); // mostra o primeiro
            Carousel._interval = setInterval(() => Carousel.Next(), 5000);
        } else {
            throw "O método Start precisa de um array com elementos.";
        }
    }

    // Mostra o próximo item do carrossel
    static Next() {
        const item = carouselArr[Carousel._sequence];

        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        // limpa conteúdo anterior
        carouselDiv.innerHTML = "";
        titleDiv.innerHTML = "";

        // cria imagem
        const imgElement = document.createElement("img");
        imgElement.src = "img/" + item.img;
        imgElement.alt = item.title;
        imgElement.style.width = "100%";

        // cria título com link
        const linkElement = document.createElement("a");
        linkElement.href = item.link;
        linkElement.textContent = item.title;
        linkElement.style.textDecoration = "none";
        linkElement.style.color = "#000";

        // adiciona ao DOM
        carouselDiv.appendChild(imgElement);
        titleDiv.appendChild(linkElement);

        // atualiza sequência
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}
