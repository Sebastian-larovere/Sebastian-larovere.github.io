// Aseguramos que el código se ejecute cuando el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Sitio web de Sebastián Larovere listo y cargado! 🚀");

    // Tabs behavior
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(targetId, button) {
        tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        tabContents.forEach(c => { c.classList.remove('active'); c.setAttribute('hidden', ''); });

        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        const target = document.querySelector(targetId);
        if (target) {
            target.classList.add('active');
            target.removeAttribute('hidden');
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tabTarget;
            activateTab(target, btn);
        });
    });

    // Seleccionamos las tarjetas dentro de la pestaña Products para la interactividad
    const tarjetasServicios = document.querySelectorAll('#products .tarjeta-servicio');

    tarjetasServicios.forEach((tarjeta) => {
        tarjeta.style.cursor = 'pointer';
        tarjeta.addEventListener('click', () => {
            const nombreServicio = tarjeta.querySelector('h3').innerText;
            alert(`¡Gracias por tu interés en ${nombreServicio}! Muy pronto habrá más detalles disponibles sobre este servicio.`);
        });
    });
});