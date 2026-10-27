
const dialog = document.getElementById("installDialog");
const toast = document.getElementById("toast");
const installButton = document.getElementById("installHelpBtn");

let installPrompt = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// Detectar cuándo el navegador permite instalar la aplicación.
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  showToast("¡CODECORSA se instaló correctamente!");
});

// Al pulsar "Cómo instalar", solicitar instalación
// si está disponible; de lo contrario, mostrar instrucciones.
installButton.addEventListener("click", async () => {
  if (installPrompt) {
    const promptEvent = installPrompt;
    installPrompt = null;

    await promptEvent.prompt();

    const result = await promptEvent.userChoice;

    if (result.outcome === "accepted") {
      showToast("Instalación aceptada. Finaliza los pasos del navegador.");
    }

    return;
  }

  dialog.showModal();
});

document.getElementById("closeDialog")
  .addEventListener("click", () => dialog.close());

document.getElementById("okDialog")
  .addEventListener("click", () => dialog.close());

document.getElementById("moreBtn")
  .addEventListener("click", () => dialog.showModal());

// Compartir CODECORSA
document.getElementById("shareBtn").addEventListener("click", async () => {
  const shareData = {
    title: "CODECORSA",
    text: "Viste tus espacios con estilo. Conoce CODECORSA.",
    url: "https://codecorsa.github.io/app/"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      // El usuario pudo cancelar el menú de compartir.
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(shareData.url);
      showToast("¡Enlace copiado para compartir!");
    } catch (error) {
      showToast(shareData.url);
    }
  } else {
    showToast(shareData.url);
  }
});

// Registrar el service worker.
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => {
        console.error("Error registrando CODECORSA:", error);
      });
  });
}
