// Interface des options de toast
export interface ToastOptions {
  title?: string;
  message: string;
  duration?: number;
  type?: "success" | "error" | "warning" | "info";
  style?: "clair" | "fonce";
  icon?: boolean;
}

// Fonction utilitaire pour obtenir ou créer le conteneur à toasts
function getToastContainer(): HTMLElement {
  let container = document.querySelector(".toast-container") as HTMLElement | null;

  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  return container;
}

function getIconPath(type: "success" | "error" | "warning" | "info"): string {
  return `../dist/img/${type}.png`;
}

export function showToast({
  title = "Notification",
  message,
  duration = 4000,
  type = "info",
  style = "clair",
  icon = true,
}: ToastOptions): void {
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

  const progress = toast.querySelector(".toast-progress") as HTMLElement | null;
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

