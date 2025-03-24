document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita que se recargue la página

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            comment: event.target.comment.value,
        };

        try {
            const response = await fetch("https://rmg-backmail.vercel.app/api/mail/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Consulta enviada con éxito. Nos contactaremos pronto.");
                form.reset(); // Reinicia el formulario
            } else {
                alert("Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error al enviar la consulta:", error);
            alert("Error al enviar la consulta. Por favor, intenta nuevamente.");
        }
    });
});
