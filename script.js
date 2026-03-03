document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById("btn-no");

    const moveButton = (e) => {
        e.preventDefault(); 
        
        if (btnNo.style.position !== "fixed") {
            btnNo.style.position = "fixed";
        }
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const btnRect = btnNo.getBoundingClientRect();
        
        // Margen de seguridad (20px) para que no se pegue a los bordes exactos
        const padding = 20; 
        const maxX = viewportWidth - btnRect.width - padding;
        const maxY = viewportHeight - btnRect.height - padding;
        
        // Coordenadas aleatorias dentro del límite visible
        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    };
    
    btnNo.addEventListener("mouseover", moveButton);
    btnNo.addEventListener("touchstart", moveButton, { passive: false });
    btnNo.addEventListener("click", moveButton); 
});