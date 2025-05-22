# 🧑‍💻 Fullstack Developer Portfolio

A modern, full-featured, responsive portfolio for fullstack developers. Built using **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite** — based on a beautiful [Figma design](https://www.figma.com/design/JE4wp5wfO3pIu4LpYSQewh/Developer-s-Portfolio--Community-?node-id=0-1&p=f&t=2V8mIRGJfcYh4xLu-0).

📌 GitHub Repository: [mwenaro/gomycode-react-ts-fullstack-dev-portfolio](https://github.com/mwenaro/gomycode-react-ts-fullstack-dev-portfolio)

---

## ✨ Features

* ⚡ Blazing-fast development with **Vite**
* 🧠 Written in **TypeScript** for type safety
* 💨 Styled with **Tailwind CSS**
* 🌙 Dark mode support
* 🧩 Fully responsive for all devices
* 🧱 Modular and scalable architecture
* 🔄 Smooth animations via **Framer Motion**
* 📈 SEO-friendly and optimized for performance

---

## 🛠️ Tech Stack

| Layer      | Tools / Libraries                        |
| ---------- | ---------------------------------------- |
| Frontend   | React 19, TypeScript, Vite, Tailwind CSS |
| Routing    | React Router                             |
| Animations | Framer Motion                            |
| Tooling    | ESLint, Prettier, Husky                  |

---

## 📂 Folder Structure

```bash
gomycode-react-ts-fullstack-dev-portfolio/
├── public/              # Static files (images, favicon, etc.)
├── src/
│   ├── assets/          # Design assets and icons
│   ├── components/      # Reusable UI components
│   ├── data/            # Data structures (e.g. projects, skills)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components (Home, About, etc.)
│   ├── routes/          # Route definitions and layout
│   ├── utils/           # Helper functions
│   ├── App.tsx          # App entry component
│   ├── main.tsx         # Vite + React app bootstrapping
│   └── index.css        # Tailwind + global styles
├── .eslintrc.cjs        # ESLint configuration
├── tailwind.config.js   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── README.md            # You're reading it!
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 16
* npm or Yarn

### Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/mwenaro/gomycode-react-ts-fullstack-dev-portfolio.git
   cd gomycode-react-ts-fullstack-dev-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [`http://localhost:5173`](http://localhost:5173) in your browser.

---

## 🧪 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run lint checks (ESLint + Prettier)  |

---

## 🖌 Customization Guide

* **Text & Sections**: Update content in `src/pages/` and `src/data/`.
* **Colors & Fonts**: Modify `tailwind.config.js` for theming.
* **Images**: Replace in `public/assets/`.

---

## 🧾 Deployment

### Build for Production

```bash
npm run build
```

The production-ready site will be in the `/dist` folder. You can deploy it via:

* [Vercel](https://vercel.com)
* [Netlify](https://netlify.com)
* [GitHub Pages](https://pages.github.com)
* Any static host

---

## 📸 Figma Design

This portfolio is based on a public design:
[Figma Link](https://www.figma.com/design/JE4wp5wfO3pIu4LpYSQewh/Developer-s-Portfolio--Community-?node-id=0-1)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgments

* Original Figma design by the community
* React team for React 19 support
* Tailwind CSS for streamlined styling
* Vite for blazing-fast builds
