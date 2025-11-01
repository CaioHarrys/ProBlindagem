# Pro Blindagem - Phone Protection Landing Page

## Overview

Pro Blindagem is a modern, responsive landing page for a business offering nano-chemical phone screen protection services. The application is built with **React** and features a sleek, interactive design with a particle background, a sticky header with animated navigation links, and a mobile-friendly hamburger menu. The site aims to attract customers by showcasing the benefits of phone screen protection, providing a seamless user experience, and encouraging bookings via WhatsApp.

### Features

- **Interactive Header**: A fixed header with a logo, navigation links, and a hamburger menu for mobile devices. Navigation links feature a hover effect with a filling underline bar and spark animation.
- **Particle Background**: A dynamic canvas-based particle background with moving particles and connecting lines, optimized for performance with visibility pausing and adaptive particle count.
- **Responsive Design**: Fully responsive layout with a mobile-friendly dropdown menu and smooth animations.
- **SEO and Accessibility**: Includes meta tags for SEO and ARIA attributes for accessibility.
- **Performance Optimizations**: Lazy-loaded images, capped FPS for particle animation, and visibility-based pausing to reduce CPU usage.

## Tech Stack

- **Frontend**: React (JSX), CSS
- **Libraries**:
  - React Icons (`react-icons`) for hamburger menu icons
  - Inter font (Google Fonts) for typography
- **Styling**: Custom CSS with CSS variables, transitions, and animations
- **Deployment**: Suitable for static hosting (e.g., Vercel, Netlify)

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** for package management
- A modern web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/pro-blindagem.git
   cd pro-blindagem
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Project Structure**:

   ```
   pro-blindagem/
   ├── src/
   │   ├── assets/
   │   │   ├── css/
   │   │   │   ├── Header.css          # Header styles with hover animations
   │   │   │   ├── ParticleBackground.css # Particle background styles
   │   │   ├── logo/
   │   │   │   ├── Logo.png           # Logo image
   │   ├── components/
   │   │   ├── Header.jsx             # Header component with navigation
   │   │   ├── ParticleBackground.jsx # Particle background component
   │   ├── App.jsx                    # Main app component
   │   ├── index.css                  # Global styles
   │   ├── index.js                   # Entry point
   ├── public/
   │   ├── index.html                 # HTML template
   ├── package.json                   # Project dependencies and scripts
   ├── README.md                      # This file
   ```

4. **Add Google Fonts**:
   Include the Inter font in your `public/index.html`:

   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
     rel="stylesheet"
   />
   ```

5. **Run the Development Server**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   The app will be available at `http://localhost:3000`.

### Usage

- **Header**: The header is fixed at the top with a logo and navigation links ("Quem Somos", "Serviços", "Pacotes", "Avaliações"). On mobile devices (≤768px), a hamburger menu toggles a dropdown with smooth slide-in animation.
- **Particle Background**: A full-screen canvas with animated particles and connecting lines, styled with a dark gradient background. The particles are optimized to pause when the tab is inactive or the canvas is out of view.
- **Customization**:
  - Update the logo in `src/assets/logo/Logo.png`.
  - Modify navigation links in `src/components/Header.jsx`.
  - Adjust particle settings (e.g., count, speed, colors) in `src/components/ParticleBackground.jsx`.

### CSS Structure

- **`Header.css`**: Styles for the header, including responsive hamburger menu, hover animations (underline bar with sparks), and dropdown menu.
- **`ParticleBackground.css`**: Styles for the canvas and body background gradient, using CSS variables for colors.
- **Global Styles**: Applied in `index.css` or `ParticleBackground.css` for the body background and font.

### JavaScript Details

- **Header.jsx**: Uses React state (`useState`) to toggle the mobile menu. Includes hover animations for navigation links with a filling bar and spark effect.
- **ParticleBackground.jsx**: A React component that renders a canvas with animated particles. Uses `useEffect` and `useRef` for canvas management, with performance optimizations like:
  - Capped FPS (30) to reduce CPU usage.
  - IntersectionObserver to pause animation when the canvas is not visible.
  - Visibility change listener to pause when the tab is inactive.
  - Throttled resize handling to adjust particle count dynamically.

### Deployment

To deploy the app:

1. Build the project:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
2. Deploy the `build/` folder to a static hosting service like Vercel, Netlify, or GitHub Pages.
3. Ensure the logo and other assets are correctly referenced in the production build.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

© 2025 Pro Blindagem. All rights reserved.

## Contact

For inquiries, contact us via [WhatsApp](https://wa.me/5599999999999) or email (add your email here).
