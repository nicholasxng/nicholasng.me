# Nicholas Ng's Professional Portfolio

Welcome to the repository for my professional portfolio website, built with [Hugo](https://gohugo.io/). This site serves as a showcase of my career journey, technical skills, and professional contributions.

## ✨ Amber Tech Narrative Redesign

This repository features a significant visual and architectural overhaul, implementing the **"Amber Tech Narrative"** design system (Wired aesthetic).

### Key Features
- **Neo-Brutalist Bento Layout**: A modern, high-fidelity grid system for showcasing professional experience.
- **Tailwind CSS Architecture**: A robust styling system built for performance and responsive flexibility.
- **Editorial Typography**: Customized typography using the *Epilogue* font for a premium, tech-forward feel.
- **Mobile-First Navigation**: Includes a custom Neo-Brutalist hamburger menu and optimized mobile viewport flow.

## 🛠 Tech Stack

- **SSG**: [Hugo](https://gohugo.io/) (Theme: [Adritian Free Hugo Theme](https://github.com/adityatelange/hugo-adritian))
- **Styling**: Tailwind CSS (via CDN with custom config) & PostCSS.
- **Content**: Markdown-driven project and experience descriptions.
- **Hosting**: GitHub Pages (via GitHub Actions).

## 📂 Project Structure

- `content/`: Markdown files for projects, experience, and site pages.
- `layouts/`: Custom Hugo templates and partials for the redesign.
- `assets/`: CSS, images, and static assets.

## 🧪 Testing

This project uses [Playwright](https://playwright.dev/) for End-to-End (E2E) testing to ensure visual consistency and functionality across desktop and mobile browsers.

### Running Tests

1.  **Install Browser Binaries** (First time only):
    ```bash
    npx playwright install
    ```

2.  **Standard Test Run** (Headless):
    ```bash
    npm test
    ```
    *This starts a local Hugo server and runs all tests across Chrome, Firefox, Safari, and Mobile viewports.*

3.  **UI Mode** (Interactive):
    ```bash
    npm run test:ui
    ```
    *This opens the Playwright Test Runner UI for debugging and visual verification.*

---
*Status: Redesign complete. Active portfolio maintenance.*
