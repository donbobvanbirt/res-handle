## res-handle

Middleware for express. Adds handle method to res and can be easily used as a callback to make your code look cleaner. 
res.handle accept two argument: error and data. In the case of an error, it will return status 400. Otherwise it will return status 200 along with any provided data.

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

Call in function:
```js
getData() => {
  if (err) return cb(err);
  cb(null, data);
});
```
