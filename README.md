# Next.js experimental `concurrentFeatures` and `rewrites` don't work

This is a minimal reproduction of a bug where using
`experimental.concurrentFeatures` prevents `rewrites` from working.

This app was bootstrapped via `yarn create next-app`, the additional meaningful
changes are:

- Enable experimental features
- Install latest React, ReactDOM, and Next packages
- Add rewrites to next.config.js
- Add `bar.js` page (which `/foo` should render instead)
- Add `_error.js` page

## Bug Reproduction:

- `yarn`
- `yarn dev`
- _or_:
  - `yarn build`
  - `yarn start`
- Visit `localhost:3000`

### In Dev:

In dev (`yarn dev`), visiting `localhost:3000/foo` the page will hang and won't
respond with any content.

### Production:

In production, visiting `localhost:3000/foo` returns the `_error.js` page
