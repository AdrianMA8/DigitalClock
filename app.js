let is24Hour = true; // Formato inicial

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24Hour) {
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // convierte a formato 12h
        document.getElementById("clock").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    }else{
        document.getElementById("clock").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
}

function pad(num) {
    return num.toString().padStart(2, "0");
}

// Actualiza cada segundo
setInterval(updateClock, 1000);
updateClock(); // primera llamada inmediata

// Botón para cambiar formato
document.getElementById("toggleFormat").addEventListener("click", () => {
    is24Hour = !is24Hour;
    updateClock();
});