![Capture_d_écran_2025-06-20_164417-removebg-preview](https://github.com/user-attachments/assets/cdf934a9-d31a-44fa-891d-6dd62cde58a7)# 📦 notify

Un **petit paquet JavaScript / TypeScript** pour afficher des **notifications toast** en bas à droite de l’écran.  
Fonctionne aussi bien en JS qu'en TS, simple à utiliser et visuellement propre. 🔥

---

## ✨ Aperçu

![Capture_d_écran_2025-06-20_164632-removebg-preview](https://github.com/user-attachments/assets/9692fc3d-7e01-4556-ad9f-16a9c351758d)
![Capture_d_écran_2025-06-20_163859-removebg-preview](https://github.com/user-attachments/assets/663db643-c5f0-4914-945a-5ddb2d67b448)
![Capture_d_écran_2025-06-20_164225-removebg-preview](https://github.com/user-attachments/assets/be9f7e29-ea04-483d-a748-1d124225fca2)
![Capture_d_écran_2025-06-20_164417-removebg-preview](https://github.com/user-attachments/assets/e1b492e9-ed4a-4a47-b4b3-8283cc926561)
![Capture_d_écran_2025-06-20_164448-removebg-preview](https://github.com/user-attachments/assets/c454a6cb-32aa-4e45-a347-d6da8e28e1c2)
![Capture_d_écran_2025-06-20_164525-removebg-preview](https://github.com/user-attachments/assets/155325db-418f-4dbf-9dc8-7322d8463621)
![Capture_d_écran_2025-06-20_164550-removebg-preview](https://github.com/user-attachments/assets/169e3b96-63a3-4396-803b-747f2efade5e)
![Capture_d_écran_2025-06-20_164609-removebg-preview](https://github.com/user-attachments/assets/3b7bc012-f4ae-4779-9108-40ad904449ec)


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
