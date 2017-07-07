# {TITLE}

[![CircleCI](https://circleci.com/gh/transferwise/{REPO}.svg?style=shield)](https://circleci.com/gh/transferwise/{REPO})

{DESCRIPTION}

## Usage

### Installation

```
npm install git+ssh://git@github.com/transferwise/{REPO}.git#{version-tag}
```

### Usage in `frontend-apps`

#### `Apps`

Like a normal dependency in `frontend-apps` `/apps`, specify it in the `package.json` of your app.

```
{
  "name": "tw.landing",
  "include": {
    "js": [
      ...
      "node_modules/{REPO}/{REPO}.min.js"
    ]
  }
}
```

#### `Modules`

No changes necessary, make sure the consuming apps have the dependency included.

## Development

`npm` is used as the sole package manager and its scripts in `package.json` are used for tasks, with Webpack handling module loading and bundling using loaders. ES2015 is transpiled using Babel and the ESLint config we follow is [Airbnb's](https://github.com/airbnb/javascript).

[Yarn](https://yarnpkg.com/) can be used instead of `npm`.

### Tasks

#### Install

```
npm install
```

#### Test and lint

```
npm test
```

#### Test with watch

```
npm run test:watch
```

#### Build

```
npm run build
```

This is usually done by CircleCI, but it may be useful when trying out changes with local consumers.

### Development pipeline

All development happens on feature branches. On commits to any branch, CircleCI will run the tests. After a successful code review, Merge can be clicked and CircleCI will trigger a job again, building the bundle and releasing it to GitHub.

1. Make changes on a feature branch
1. **Bump package version** in `package.json` (we're following SemVer) and **add related new item in CHANGELOG.md**!
1. Create a Pull Request
1. Get reviews
1. Merge using GitHub UI
1. Wait for the CircleCI job to finish
1. A GitHub release should be automatically published based on your new `CHANGELOG.md` item
1. ???
1. PROFIT
