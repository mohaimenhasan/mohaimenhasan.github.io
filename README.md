# Personal Portfolio

Welcome to my personal portfolio repository!

## Technologies Used

- **React**: 18.2.0
- **Next.js**: 13.4.19
- **Tailwind CSS**: 3.3.3
- **Framer Motion**: 6.2.6
- **Prism React Renderer**: 2.0.6
- **React Icons**: 4.11.0
- **React Particles**: 2.12.2
- **React PDF**: 7.3.3
- **React Syntax Highlighter**: 15.5.0
- **React Three Fiber**: 6.0.13
- **RSS Parser**: 3.12.0
- **Three.js**: 0.157.0
- **tsparticles**: 2.12.0

## Development 
- clone the repo `git clone https://github.com/mohaimenhasan/portfolio`
- make sure you have node installed
- run `npm install`
- run `npm run dev`

## GitHub Pages deployment

The site supports both a project URL (`https://mohaimenhasan.github.io/portfolio/`)
and the account root (`https://mohaimenhasan.github.io/`). `next.config.js` uses the
`GITHUB_REPOSITORY` environment variable supplied by GitHub Actions to select the
base path. Local development uses `/`.

To move the portfolio to the account root:

1. Merge these changes into `main`, then rename this repository from `portfolio`
   to `mohaimenhasan.github.io` in GitHub's repository settings. GitHub Pages
   requires that exact repository name for the account root.
2. Update the local remote:
   `git remote set-url origin https://github.com/mohaimenhasan/mohaimenhasan.github.io.git`.
3. Run **Deploy to GitHub Pages** from the Actions tab. Start a new run rather than
   re-running a build from before the rename. The new build will have no `/portfolio`
   prefix.
4. In **Settings > Pages**, keep **Deploy from a branch**, with `gh-pages` and
   `/(root)` as the publishing source. Update the repository's website URL to
   `https://mohaimenhasan.github.io/`.

The portfolio routes will then be `/about/`, `/projects/`, `/fun-projects/`,
`/blog/`, and `/contact/`. Other repositories' Pages sites stay at
`https://mohaimenhasan.github.io/<project>/`; they are not moved or overwritten.
Avoid adding portfolio routes with the same names as those project repositories.

GitHub redirects the old **repository** URL after a rename, but not the old
**Pages** URLs. Existing `/portfolio/...` bookmarks will need updating or a
separate redirect solution. No repository rename or live deployment is performed
by changing this code alone.

To build either layout locally:

```sh
# Root site
GITHUB_REPOSITORY=mohaimenhasan/mohaimenhasan.github.io npm run build

# Existing project site
GITHUB_REPOSITORY=mohaimenhasan/portfolio npm run build
```

### Fun Projects

`pages/fun-projects.js` contains a curated snapshot of public, personally owned
repositories with GitHub Pages enabled. Each card links to its source and, when
available, its deployed site. Archived or broken demos are labeled. Update the
list when publishing another project; the page makes no runtime GitHub API calls.

## About

This portfolio contains examples of my projects, accomplishments, and other relevant information about my professional journey.

## Contact

Feel free to reach out to me at [mohaimenhasan@gmail.com](mailto:mohaimenhasan@gmail.com).

## License

This project is licensed under the MIT License.
