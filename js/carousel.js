let carouselArr = [];

class Carousel {
    constructor(image, text, link){
        this.image = image;
        this.text = text;
        this.link = link;
    }
      
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
                
                // Add event listeners for arrows
                document.getElementById("prev-btn").addEventListener("click", Carousel.Previous);
                document.getElementById("next-btn").addEventListener("click", Carousel.Next);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let c = carouselArr[Carousel._sequence];
        document.getElementById("carousel").innerHTML = `<a href="${c.link}"><img src="img/${c.image}" width="100%" height="auto"></a>`;
        document.getElementById("carousel-title").innerHTML = `<a href="${c.link}" style="color:black">${c.text}</a>`;
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size)
            Carousel._sequence = 0;
        
        // Reset auto-interval on manual click to avoid immediate advance
        if(Carousel._interval) {
            clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        }
    }

    static Previous(){
        Carousel._sequence--;
        if(Carousel._sequence < 0)
            Carousel._sequence = Carousel._size - 1;
        
        let c = carouselArr[Carousel._sequence];
        document.getElementById("carousel").innerHTML = `<a href="${c.link}"><img src="img/${c.image}" width="100%" height="auto"></a>`;
        document.getElementById("carousel-title").innerHTML = `<a href="${c.link}">${c.text}</a>`;
        
        // Reset auto-interval on manual click
        if(Carousel._interval) {
            clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        }
    }
};