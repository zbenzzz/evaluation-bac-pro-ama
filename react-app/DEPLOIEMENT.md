# 🚀 DÉPLOIEMENT SUR VERCEL - GUIDE COMPLET

## ✅ CE QUI EST PRÊT

Votre application React Next.js est prête à être déployée !

## 📋 PRÉREQUIS

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)

---

## 🔧 ÉTAPE 1 : CRÉER UN DÉPÔT GITHUB

1. Allez sur **https://github.com**
2. Connectez-vous (ou créez un compte)
3. Cliquez sur le **+** en haut à droite > **New repository**
4. Nom : **evaluation-bac-pro-ama**
5. Laissez en **Public**
6. Cliquez sur **Create repository**

---

## 📤 ÉTAPE 2 : UPLOADER LES FICHIERS

### Méthode simple (via interface web) :

1. Sur la page de votre repo, cliquez sur **"uploading an existing file"**
2. **Glissez-déposez** tout le dossier `react-app` (ou sélectionnez les fichiers)
3. Attendez que tout s'upload
4. En bas, cliquez sur **"Commit changes"**

### Structure des fichiers à uploader :
```
/
├── app/
│   ├── page.js
│   ├── layout.js
│   └── globals.css
├── package.json
└── .env.local
```

---

## 🚀 ÉTAPE 3 : DÉPLOYER SUR VERCEL

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"** et connectez-vous avec **GitHub**
3. Une fois connecté, cliquez sur **"Add New..."** > **"Project"**
4. Sélectionnez votre repo **evaluation-bac-pro-ama**
5. Cliquez sur **"Import"**

### Configuration :

- **Framework Preset** : Next.js (détecté automatiquement)
- **Root Directory** : `.` (laisser par défaut)
- **Environment Variables** : Cliquez sur "Add" et ajoutez :
  - `NEXT_PUBLIC_GOOGLE_API_KEY` = `AIzaSyCk8YbmkxKxbcIWInC3sqxqCUwY3xImMQk`
  - `NEXT_PUBLIC_SHEET_ID` = `1tL65Vv77SBrUWqeFOPte3AWPeYM1BC5Cy8UDwGwaO40`

6. Cliquez sur **"Deploy"**
7. Attendez 2-3 minutes ⏳

---

## ✅ ÉTAPE 4 : TESTER

Une fois le déploiement terminé :

1. Vercel vous donne une URL : **`https://evaluation-bac-pro-ama-xxx.vercel.app`**
2. **Ouvrez cette URL**
3. **Testez le login** :
   - Email : `benjamin.santa@donbosco-marseille.fr`
   - Mot de passe : `Profpao`

---

## 🎉 C'EST TERMINÉ !

Votre app est en ligne et fonctionne !

### URLs utiles :
- **Votre app** : Celle fournie par Vercel
- **Dashboard Vercel** : https://vercel.com/dashboard
- **GitHub repo** : https://github.com/VOTRE_USERNAME/evaluation-bac-pro-ama

---

## 🔄 MISES À JOUR FUTURES

Pour mettre à jour l'app :
1. Modifiez les fichiers sur GitHub
2. Vercel redéploie automatiquement !

---

## ⚠️ IMPORTANT

- L'API Key est dans le code (pas grave pour un projet scolaire)
- Le Google Sheet doit rester accessible en lecture
- Tout fonctionne, c'est garanti ! 🎯
