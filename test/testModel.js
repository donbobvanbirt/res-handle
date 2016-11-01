
const axios = require('axios');
const { get, post, put } = axios;

exports.testGet = (cb) => {
  get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    cb(null, res.data)

  })
  .catch(err => cb(err))
}

exports.testPost = (body, cb) => {
  post('https://jsonplaceholder.typicode.com/posts', body)
  .then(res => {
    cb(null, res.data)
  })
  .catch(err => cb(err))
}
