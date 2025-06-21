import { showToast, ToastOptions } from "./toast.js";
const path_relatif = "../dist/styles.css";
const path_complet = new URL(path_relatif, import.meta.url).href;

// ajouter le link du css dans le html
document.head.innerHTML += `<link rel="stylesheet" href="" data="">`;

export function notify(options: ToastOptions): void {
  showToast(options);
}
