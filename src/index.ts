import { showToast, ToastOptions } from "./toast.js";


// ajouter le link du css dans le html
document.head.innerHTML += `<link rel="stylesheet" href="https://github.com/max-63/notify/blob/main/dist/styles.css" data="">`;

export function notify(options: ToastOptions): void {
  showToast(options);
}
