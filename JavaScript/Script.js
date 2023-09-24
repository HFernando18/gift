document.addEventListener("DOMContentLoaded", function () {
    const botonRegalo = document.getElementById("boton-regalo");
    const imagenGirasol = document.querySelector(".imagen-girasol img");
    const regalo = document.querySelector(".imagen-gift img");
    const msj2 = document.querySelector(".box");
    var posicionY = imagenGirasol.getBoundingClientRect().top + window.scrollY;

    // Oculta la imagen del girasol al cargar la página
    imagenGirasol.style.display = "none";
    msj2.style.display = "none"

    
    botonRegalo.addEventListener("click", function () {
     
        regalo.style.display = "none"
        imagenGirasol.style.display = "block";
        
        msj2.style.display = "inline-flex"

        botonRegalo.disabled = true;

        botonRegalo.textContent = "Regalo Abierto";
        window.scrollTo({
            top: posicionY,
            behavior: "smooth"
        })
    });
});