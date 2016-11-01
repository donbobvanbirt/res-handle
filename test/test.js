const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('./testApp')
const handle = require('../');

const spy = sinon.spy();

chai.use(chaiHttp);

describe('handle', () => {
  it('GET returns status 200 and correct data', () => {
    return chai.request(app)
    .get('/')
    .then(res => {
      expect(res).to.have.status(200)
      expect(res.body[0].id).to.equal(1)
      expect(res.body[33].id).to.equal(34)
    })
  })

  it('POST returns status 200 and correct data', () => {
    let testObj = { testKey: 'IT WORKS!' }
    return chai.request(app)
    .post('/')
    .send(testObj)
    .then(res => {
      expect(res).to.have.status(200)
      expect(res.body.id).to.equal(101)
      expect(res.body.testKey).to.equal('IT WORKS!')
    })
  })
})
