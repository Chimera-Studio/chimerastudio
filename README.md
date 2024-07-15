<img src=".github/docs/logo.svg" alt="logo" height="100px" width="100px" />

# Official website of Chimera Studio

We are an app developing collective armed with a wide spread of digital skills, ready to deliver fun and entertainment. Our recent leaps in progress have allowed us to offer in-organisation project optimisations and idea realisations. It's simple, if you have a good idea for an app, talk to us.

Check out the live site at [studiolumistra.com](https://chimerastudio.co.uk)

- Designed and Developed by: [Chimera Studio](https://chimerastudio.co.uk)

----

## Deployment

This project uses [Github Actions](https://github.com/features/actions) to trigger a deployment and is hosted using [GitHub pages](https://pages.github.com/)

The deployment is triggered by manually running the ["Deploy" workflow](https://github.com/Chimera-Studio/chimerastudio/actions/workflows/deploy.yml)

----

## Development

###### Developed using [Next.js](https://nextjs.org) & [TypeScript](https://www.typescriptlang.org)

### Requirements

| Dependency | Version  |
| ------------------ | -------- |
| [Node.js](https://nodejs.org/en) | `>=20` |
| [yarn](https://yarnpkg.com) | `>=1.22.22` |

### Commands

To install & setup dependencies:
```sh
yarn (install)
```

Run the DEV server for local development in the browser:
```sh
yarn dev
```
The application will be available at [`localhost:3000`](http://localhost:3000)

To build the application for production:
```sh
yarn build
yarn build:sitemap
```

Run tests & linters
```sh
yarn tsc

yarn lint

yarn test
```

Get test coverage report:
```sh
yarn test:coverage
```

### Project .env variables
```sh
GTM_ID="<secret>"
SITE_URL="https://chimerastudio.co.uk"
BASE_PATH="chimerastudio" # Not required with a custom domain
```