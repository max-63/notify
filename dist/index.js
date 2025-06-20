import { showToast } from "./toast.js";
// ajouter le link du css dans le html
document.head.innerHTML += `<link rel="stylesheet" href="../dist/styles.css" data="">`;
export function notify(options) {
    showToast(options);
}
