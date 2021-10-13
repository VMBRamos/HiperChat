
const open_menu = document.getElementById("open_menu");
const container = document.getElementById("container");
const send_message = document.getElementById("mensagem");


open_menu.addEventListener("change", () => {
    if (open_menu.checked) {
        container.classList.remove("abrir");
        container.classList.add("fechar");
        return setTimeout(() => {
            container.style.display = "none";
        }, 1000);
    }

    container.style.display = "block";
    container.classList.remove("fechar");
    container.classList.add("abrir");
    return;
});

