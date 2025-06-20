# 📦 notify

Un **petit paquet JavaScript / TypeScript** pour afficher des **notifications toast** en bas à droite de l’écran.  
Fonctionne aussi bien en JS qu'en TS, simple à utiliser et visuellement propre. 🔥

---

## ✨ Aperçu

Voici quelques captures d’écran montrant le résultat :

![Capture d'écran 2025-06-20 164632](https://github.com/user-attachments/assets/96e18a04-007d-4809-b4f3-4079c592f2cf)  
![Capture d'écran 2025-06-20 164609](https://github.com/user-attachments/assets/0f0532d1-2928-4399-a1b1-475003708bba)  
![Capture d'écran 2025-06-20 164550](https://github.com/user-attachments/assets/76cf9a8b-9dc2-4fcd-a9e2-01013e856679)  
![Capture d'écran 2025-06-20 164525](https://github.com/user-attachments/assets/eaa5cc5e-0f34-4ed6-a990-81f581d01f96)  
![Capture d'écran 2025-06-20 164448](https://github.com/user-attachments/assets/90bb5a71-2ed1-4392-8ce3-bafd2dbd399f)  
![Capture d'écran 2025-06-20 164417](https://github.com/user-attachments/assets/37822c7c-eb9f-420c-8e01-0ab4f0da1c06)  
![Capture d'écran 2025-06-20 164225](https://github.com/user-attachments/assets/2acf9f15-2cbb-4836-ad1f-6ecf97213e18)  
![Capture d'écran 2025-06-20 163859](https://github.com/user-attachments/assets/b75fe942-2348-4418-9621-5bdf63c9ee67)

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
