import { showToast, ToastOptions } from "./toast.js";


// ajouter le link du css dans le html
document.head.innerHTML += `<style>

  /* ========== Conteneur ========== */
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: calc(100vw - 40px);
}

/* ========== Animation d'apparition/disparition ========== */
@keyframes toastIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 0.95;
  }
}

@keyframes toastOut {
  from {
    opacity: 0.95;
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* ========== Toast général ========== */
.toast {
  padding: 14px 18px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  width: 300px;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
  opacity: 0.95;
  transition: transform 0.4s ease, opacity 0.4s ease;
  animation: toastIn 0.5s ease forwards;
  z-index: 1000;
}

.toast:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

/* ========== Thèmes - Contrastes et couleurs adaptées ========== */
.toast-success-clair {
  background-color: #d1fae5;
  color: #065f46;
}

.toast-success-fonce {
  background-color: #065f46;
  color: #a7f3d0;
}

.toast-error-clair {
  background-color: #fee2e2;
  color: #991b1b;
}

.toast-error-fonce {
  background-color: #7f1d1d;
  color: #fecaca;
}

.toast-warning-clair {
  background-color: #fef3c7;
  color: #92400e;
}

.toast-warning-fonce {
  background-color: #78350f;
  color: #fde68a;
}

.toast-info-clair {
  background-color: #dbeafe;
  color: #1e3a8a;
}

.toast-info-fonce {
  background-color: #1e3a8a;
  color: #bfdbfe;
}

/* ========== Structure interne ========== */
.toast-title {
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 16px;
}

.toast-message {
  font-size: 14px;
  line-height: 1.4;
}

.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  transition: width linear;
  border-radius: 0 0 10px 10px;
}

.toast-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.toast-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.toast-text {
  flex: 1;
}

</style>`;

export function notify(options: ToastOptions): void {
  showToast(options);
}
