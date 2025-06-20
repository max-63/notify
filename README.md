![Capture_d_écran_2025-06-20_164417-removebg-preview](https://github.com/user-attachments/assets/cdf934a9-d31a-44fa-891d-6dd62cde58a7)# 📦 notify

Un **petit paquet JavaScript / TypeScript** pour afficher des **notifications toast** en bas à droite de l’écran.  
Fonctionne aussi bien en JS qu'en TS, simple à utiliser et visuellement propre. 🔥

---

## ✨ Aperçu

Voici quelques captures d’écran montrant le résultat :
![Uploading Capture_d_écran_![Capture_d_écran_2025-06-20_163859-removebg-preview](https://github.com/user-attachments/assets/629bd697-798b-4514-a43f-9d689df5a21c)
![Capture_d_écran_2025-06-20_164225-removebg-preview](https://github.com/user-attachments/assets/3de63342-80b6-4411-8400-4482cbf21eaa)
2025-06-20_164417-removebg-preview.png…]()
![Capture_d_écran_2025-06-20_164448-removebg-preview](https://github.com/user-attachments/assets/fd8b0b3b-cb49-4bd4-ad84-e108c5e8955f)
![Capture_d_écran_2025-06-20_164525-removebg-preview](https://github.com/user-attachments/assets/8ae36821-186b-4496-a567-7392389b5178)
![Capture_d_écran_2025-06-20_164550-removebg-preview](https://github.com/user-attachments/assets/30e67e8e-5b3d-4274-81e9-e92ce5ddc112)
![Capture_d_écran_2025-06-20_164609-removebg-preview](https://github.com/user-attachments/assets/402eb27d-88a2-4e68-845f-1d31301ce13a)
![Capture_d_écran_2025-06-20_164632-removebg-preview](https://github.com/user-attachments/assets/f2665089-cda9-44de-969e-15c05cfeeeaf)



---

## 🛠️ Installation

```bash
npm install @max-63/notify
```

## Exemple

Voicci un exemple d'utilisation :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Test Toast Notification</title>
</head>
<body>
  <button id="notifyBtn">🛎️ Notifier</button>
  <button>dfze</button>
  <script type="module">
    import { notify } from '../dist/index.js'; // ou le bon chemin


    document.getElementById('notifyBtn').addEventListener('click', () => {
      notify({
        title: "Notification Adrien !",
        message: "Ceci est une alerte personnalisée.",
        duration: 5000,
        type: "error",
        icone: true,
        style: "fonce"
      });
    })
  </script>
</body>
</html>

```
## 🔧 Options disponibles

| Clé       | Type                                | Description                                         |
|-----------|-------------------------------------|-----------------------------------------------------|
| `title`   | `string`                            | Titre (**obligatoire**)                                  |
| `message` | `string`                            | Message principal (facultatif)                 |
| `duration`| `number`                            | Durée en ms (ex : `5000` pour 5 secondes)           |
| `type`    | `"success"` \| `"error"` \| `"warning"` \| `"info"` | Type de toast (couleur / icône)     |
| `icon`    | `boolean`                           | Affiche une icône correspondante                    |
| `style`   | `"clair"` \| `"fonce"`              | Thème clair ou foncé                                |

---

## 📦 Structure du package

- `dist/` : fichiers compilés (`.js`, `.d.ts`, images)
- Compatible **JavaScript** et **TypeScript**
- **Léger**, sans dépendance externe

---

## 🤝 Contribution

Envie d’ajouter une fonctionnalité, corriger un bug, ou améliorer le style ?  
N’hésite pas à **forker**, coder ta feature, puis proposer une **Pull Request**. 💪

---

## 🐣 Auteur

Créé avec 💻 et ☕ par **Max‑63 (Adrien)**.

---

## 📄 Licence

Ce projet est publié sous licence **MIT** – libre d'utilisation et de modification.
