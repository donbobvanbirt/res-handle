## res-handle

Middleware for express. Adds handle method to res for an easy callback.

## Install

```bash
$ npm install res-handle
```

## Usage
Require:
```js
const handle = require('res-handle');

```

Add Middleware:
```js
app.use(handle);
```

Pass in callback:
```js
Model.getData(res.handle)
```
