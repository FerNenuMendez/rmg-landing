document.addEventListener("DOMContentLoaded", () => {
    const whatsappElement = document.getElementById("whatsapp");

    const handleScroll = () => {
        // Si el usuario se desplaza por primera vez, muestra el componente
        if (window.scrollY > 0) {
            whatsappElement.classList.add("show");
            // Remueve el evento de scroll después de mostrar el componente
            window.removeEventListener("scroll", handleScroll);
        }
    };

    // Escuchar el evento de scroll
    window.addEventListener("scroll", handleScroll);
});