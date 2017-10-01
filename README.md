The initial code was generated with `create-react-app`.

Data layer is implemented with `redux`:

- src/actions
- src/reducers
- src/selectors

CSS modules are used.

Logo is taken from https://www.olx.com/.

Service worker implementation is provided out of the box by `create-react-app`. It caches all static assets.

There's a module which emulates interation with server in `./serverMock.js`. It's assumed that there's one endpoint, which returns page for specified index (or page `1` if id is not specified).
