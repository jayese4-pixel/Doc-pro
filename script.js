// ✅ Validación de formularios DocPro
// Este código revisa que los campos no estén vacíos y muestra mensajes de error debajo.

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Script cargado correctamente - VERSIÓN NUEVA");

    // Selecciona todos los formularios de la página
    const formularios = document.querySelectorAll("form");

    formularios.forEach(formulario => {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita que la página se recargue al enviar

            let valido = true; // Bandera para saber si todo está correcto

            // Buscar todos los campos de texto y contraseña
            const campos = formulario.querySelectorAll("input[type='text'], input[type='password'], input[type='email']");

            campos.forEach(campo => {
                // Busca el <small> donde se mostrará el error
                const mensajeError = campo.parentElement.querySelector(".error-message");

                // Verificar si el campo está vacío
                if (campo.value.trim() === "") {
                    campo.style.borderColor = "red";  // Pone borde rojo
                    if (mensajeError) {
                        mensajeError.textContent = "⚠️ Este campo es obligatorio"; // Muestra mensaje
                    }
                    valido = false;
                } else {
                    campo.style.borderColor = "#ced4da"; // Restaura color normal
                    if (mensajeError) {
                        mensajeError.textContent = ""; // Borra el mensaje de error
                    }
                }
            });

            // Si todo está correcto
            if (valido) {
                alert("✅ Inicio de sesión correcto");
                formulario.reset(); // Limpia los campos
                formulario.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
            }
        });
    });
});
