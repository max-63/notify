// Fonction utilitaire pour obtenir ou créer le conteneur à toasts
function getToastContainer() {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    return container;
}
function getIconPath(type) {
    return `../dist/img/${type}.png`;
}
export function showToast({ title = "Notification", message, duration = 4000, type = "info", style = "clair", icon = true, }) {
    const container = getToastContainer();
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast-${type}-${style}`);
    const iconHTML = icon
        ? `<img class="toast-icon" src="${getIconPath(type)}" alt="${type} icon" />`
        : "";
    toast.innerHTML = `
    <div class="toast-content">
      ${iconHTML}
      <div class="toast-text">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
    </div>
    <div class="toast-progress"></div>
  `;
    container.appendChild(toast);
    const progress = toast.querySelector(".toast-progress");
    if (progress) {
        progress.style.transition = `width ${duration}ms linear`;
        requestAnimationFrame(() => {
            progress.style.width = "0%";
        });
    }
    setTimeout(() => {
        toast.remove();
    }, duration);
}
