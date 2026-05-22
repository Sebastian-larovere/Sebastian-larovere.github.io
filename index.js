// Aseguramos que el código se ejecute cuando el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Sitio web de Sebastián Larovere listo y cargado! 🚀");

    // Seleccionamos automáticamente los 4 cuadrados (tarjetas) de servicios
    const tarjetasServicios = document.querySelectorAll("main > div > div");

    // Añadimos interactividad a cada tarjeta
    tarjetasServicios.forEach((tarjeta) => {
        // Cambiar el cursor a una mano para que el usuario sepa que puede hacer clic
        tarjeta.style.cursor = "pointer";

        // Evento cuando el usuario hace clic en un servicio
        tarjeta.addEventListener("click", () => {
            // Obtenemos el texto del título (H3) de la tarjeta seleccionada
            const nombreServicio = tarjeta.querySelector("h3").innerText;
            
            // Mostramos un mensaje personalizado
            alert(`¡Gracias por tu interés en ${nombreServicio}! Muy pronto habrá más detalles disponibles sobre este servicio.`);
        });
    });
});