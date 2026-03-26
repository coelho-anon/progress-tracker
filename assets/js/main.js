// Referências principais para comportamento de cópia de e-mail.
const copyEmailButtonElement = document.getElementById("copyEmailButton");
const copyTooltipElement = document.getElementById("copyTooltip");
const copyFeedbackElement = document.getElementById("copyFeedback");
const contactEmailValue = "thiago.silva@email.com";

// Mensagem visual com ícone de check para confirmar a ação de cópia.
function showCopySuccessMessage() {
  copyFeedbackElement.textContent = "✔ E-mail copiado com sucesso.";

  setTimeout(() => {
    copyFeedbackElement.textContent = "";
  }, 2200);
}

// Controla posição do tooltip para seguir o mouse no hover do botão.
function updateTooltipPosition(event) {
  const wrapperBounds = copyEmailButtonElement.parentElement.getBoundingClientRect();
  const offsetX = event.clientX - wrapperBounds.left;
  const offsetY = event.clientY - wrapperBounds.top;

  copyTooltipElement.style.left = `${offsetX}px`;
  copyTooltipElement.style.top = `${offsetY - 6}px`;
}

copyEmailButtonElement.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contactEmailValue);

    copyEmailButtonElement.classList.add("copied-state");
    showCopySuccessMessage();

    setTimeout(() => {
      copyEmailButtonElement.classList.remove("copied-state");
    }, 460);
  } catch (error) {
    copyFeedbackElement.textContent = "Não foi possível copiar agora.";
  }
});

copyEmailButtonElement.addEventListener("mouseenter", () => {
  copyTooltipElement.classList.add("tooltip-visible");
});

copyEmailButtonElement.addEventListener("mouseleave", () => {
  copyTooltipElement.classList.remove("tooltip-visible");
});

copyEmailButtonElement.addEventListener("mousemove", updateTooltipPosition);
