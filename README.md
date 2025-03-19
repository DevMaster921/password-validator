# React Password Validator App

A simple React app built with Tailwind CSS that validates password strength according to specified criteria and provides instant feedback through an alert banner.

---

## 🚀 Features

- Validates passwords based on the following rules:
  - Minimum length of 6 characters.
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one numeric character.
  - At least one special character (`!@#$%^&*()_-+={[}]|:;"'<,>.`).
- User-friendly alert banners for success or error messages.

---

## 🎯 Tech Stack

- **React**
- **Tailwind CSS**

---

## 🛠 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/DevMaster921/password-validator.git
cd password-validator
```

### Step 2: Install Dependencies

```bash
npm install
```

or (if you're using Yarn):

```bash
yarn install
```

### Step 3: Run the App Locally

```bash
npm start
```

or (with Yarn):

```bash
yarn start
```

Your app will be available at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Alert.jsx
│   ├── PasswordInput.jsx
│   └── PasswordValidator.jsx
├── utils/
│   └── passwordUtils.js
├── App.js
└── index.js
```

- **`components`**: Contains reusable UI components.
- **`utils`**: Contains password validation logic.

---

## 📦 Build for Production

Generate an optimized build for deployment:

```bash
npm run build
```

Your build will be in the `build` folder, ready to deploy to hosting platforms like Netlify, Vercel, GitHub Pages, etc.

---
