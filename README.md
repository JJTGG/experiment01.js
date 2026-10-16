# EcoTrack Mini

**Small choices. Greener future.**

EcoTrack Mini is a minimal web application built with Next.js that lets users record daily activities related to their personal environmental impact.

Users can enter their transportation method, household energy consumption, and dietary preference through a simple interface. The application demonstrates how to build a lightweight React application with reusable components, CSS Modules, and GitHub Pages deployment.

## Features

- **Transportation Tracking:** Enter a transportation method, such as a car, bus, or bicycle.
- **Energy Use Tracking:** Record energy consumption in kilowatt-hours (kWh).
- **Diet Selection:** Choose Vegetarian, Vegan, or Omnivore from a dropdown menu.
- **Form Validation:** Require transportation and energy inputs, and prevent negative energy values.
- **Console Output:** View submitted activity data in the browser's developer console.
- **Responsive Design:** Use the application on desktop and mobile screens.
- **Reusable Components:** Share navigation across application pages.
- **CSS Modules:** Keep component styles organized and scoped.
- **Static Deployment:** Build and publish the application to GitHub Pages using GitHub Actions.

> **Current limitation:** EcoTrack Mini records activity information but does not yet calculate carbon emissions, save submissions permanently, or connect to a database.

## Technology Stack

|Technology|Purpose|
|---|---|
|Next.js|React framework and page routing|
|React|UI components and form state|
|JavaScript|Application logic|
|CSS Modules|Component-specific styling|
|GitHub Actions|Automated build and deployment|
|GitHub Pages|Static website hosting|

## Project Structure

The repository is organized as follows:

```text
experiment01/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── components/
│   └── Navigation.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── track.js
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Navigation.module.css
│   └── Track.module.css
├── next.config.mjs
├── package.json
└── README.md
```

### Directory Responsibilities

- **`components/`** — Contains reusable interface components, including the navigation bar.
- **`pages/`** — Defines the homepage, tracking page, and shared application initialization.
- **`styles/`** — Contains global CSS and CSS Modules for individual interface components.
- **`.github/workflows/`** — Contains the GitHub Actions workflow for building and deploying the application.
- **`next.config.mjs`** — Configures Next.js static export and the GitHub Pages repository path.
- **`package.json`** — Defines the application dependencies and build scripts.

## Application Pages

### Homepage — `/`

The homepage welcomes visitors, introduces EcoTrack Mini, and provides navigation to the tracking form.

Implemented in `pages/index.js`.

### Tracking Page — `/track/`

The tracking page contains three inputs:

|Field|Input Type|Description|
|---|---|---|
|Transportation|Text|Records the user's transportation method|
|Energy Use|Number|Records energy consumption in kWh|
|Diet|Dropdown|Selects Vegetarian, Vegan, or Omnivore|

Implemented in `pages/track.js`.

### Submitting Activity

When a user submits valid data, the application logs an object to the browser console.

Example:

```javascript
{
  transportation: "Bus",
  energyUse: 8.5,
  diet: "Vegan"
}
```

To inspect the submitted data, open the browser's developer tools and select the Console tab.

Submissions are not persisted. Reloading the page resets the form.

## GitHub Pages Deployment

EcoTrack Mini uses Next.js static export, which generates static website files in the `out/` directory.

GitHub Actions performs the build and deployment without requiring a local development environment.

### Setup

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Ensure `.github/workflows/deploy.yml` exists on the `main` branch.
4. Commit and push changes to `main`.
5. Open the **Actions** tab and inspect the deployment workflow.
6. Wait for the build and deployment jobs to finish successfully.

The workflow installs the dependencies, builds the static website, and publishes the generated `out/` directory.

### Published URL

For a repository named `experiment01` owned by `JJTGG`, the expected website URL is:

https://jj tgg.github.io/experiment01/

Remove the space in the URL above when opening it: the correct address is `https://jj tgg.github.io/experiment01/` without the space.

The actual published URL is determined by the GitHub Pages configuration.

## Contributing

Contributions and suggestions are welcome.

### How to Contribute

1. Open an issue describing the proposed feature, bug, or improvement.
2. Fork the repository if you are contributing from another account.
3. Make focused changes to the relevant source files.
4. Review your changes before committing.
5. Submit a pull request explaining what changed and why.
6. Check the GitHub Actions workflow and address any build failures.

Changes can be made directly through GitHub's web interface. A local terminal is not required for the repository's configured GitHub Actions deployment workflow.

### Contribution Guidelines

- Keep components small and reusable.
- Follow the existing JavaScript and CSS conventions.
- Maintain responsive layouts and accessible form labels.
- Avoid adding unnecessary dependencies.
- Do not introduce secrets or private information.
- Update the documentation when application behavior changes.
- Verify that GitHub Actions completes successfully before considering a deployment ready.

## Roadmap

Potential future improvements include:

- &#91; &#93; Calculate estimated carbon emissions from submitted activities.
- &#91; &#93; Display a daily carbon footprint summary.
- &#91; &#93; Store activity records persistently.
- &#91; &#93; Add historical activity tracking.
- &#91; &#93; Introduce charts for emissions by category.
- &#91; &#93; Allow users to export their activity data.
- &#91; &#93; Add automated tests.
- &#91; &#93; Improve accessibility and form feedback.

These are proposed enhancements, not features currently implemented.

## License

No license has been declared for this repository yet. A license should be added before the project is distributed with explicit permissions for reuse, modification, and redistribution.

## Acknowledgments

EcoTrack Mini is a small project exploring how web technologies can support more informed environmental choices.

**Track your activities. Understand your impact. Build toward a greener future.**