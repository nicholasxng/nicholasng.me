# Nicholas Ng's Professional Portfolio

Welcome to the repository for my professional portfolio website, built with [Hugo](https://gohugo.io/). This site serves as a showcase of my career journey, technical skills, and professional contributions.

## 🚀 Antigravity Redesign (In Progress)

This branch (`antigravity-redesign`) represents a significant visual and architectural overhaul of the site.

### Key Changes
- **Material 3-Inspired Design**: Implementing a modern, bento-style layout with a color palette and typography system based on Material Design 3 principles.
- **Tailwind CSS Integration**: Transitioning to [Tailwind CSS](https://tailwindcss.com/) for more flexible and maintainable styling.
- **Enhanced Experience Section**: A new dedicated `/experience` route featuring an interactive bento-box overview of my professional history.
- **Dynamic Assets**: Updated hero images and refined UI components for a more "alive" and interactive feel.

## 🛠 Tech Stack

- **SSG**: [Hugo](https://gohugo.io/) (Theme: [Adritian Free Hugo Theme](https://github.com/adityatelange/hugo-adritian))
- **Styling**: Tailwind CSS (via CDN with custom config) & PostCSS.
- **Content**: Markdown-driven project and experience descriptions.
- **Hosting**: GitHub Pages (via GitHub Actions).

## 📂 Project Structure

- `content/`: Markdown files for projects, experience, and site pages.
- `layouts/`: Custom Hugo templates and partials for the redesign.
- `assets/`: CSS, images, and static assets.
- `google-stitch-redesign/`: Reference mocks and exported assets for the current redesign phase.

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
*Status: This branch is currently the active development area for the site's next major iteration.*
