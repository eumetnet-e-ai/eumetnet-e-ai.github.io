# EUMETNET ML Applications Gallery (Climate ML Showcase)

A gallery of machine learning applications in weather and climate from across the EUMETNET community.

This project is a Single-Page Application (SPA) built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [TanStack Router](https://tanstack.com/router/latest), and [Tailwind CSS](https://tailwindcss.com/).

## Local Development

### Prerequisites

You will need Node.js installed on your system. The project uses standard npm scripts, but can also be run using [Bun](https://bun.sh/) (which is used in the CI/CD pipeline).

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/leifdenby/climate-ml-showcase.git
cd climate-ml-showcase

# Using npm
npm install

# Or using bun
bun install
```

### Running the Development Server

To start the local development server with Hot Module Replacement (HMR):

```bash
# Using npm
npm run dev

# Or using bun
bun run dev
```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).

### Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production (outputs to `dist/client/`).
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Runs ESLint to check for code quality issues.
- `npm run format` - Runs Prettier to format the codebase.

## Deployment

The application is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment process is handled by GitHub Actions (`.github/workflows/deploy-pages.yml`).

Because it is deployed to a subdirectory (`/climate-ml-showcase/`), the Vite configuration and TanStack Router are specifically set up to use the `BASE_URL` environment variable during the build step.
