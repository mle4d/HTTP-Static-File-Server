const request = require('supertest');
const app = require('../lib/app');
const { getPath } = require('../lib/file-path');

describe('app path', () => {
  it('get path', () => {
    const path = getPath('./index.html');
    expect(path).toEqual('../../pub-dir/index.html');
  });

  it('gets html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.test).toEqual(expect.stringContaining('<h1>Hello</h1>'));
      });
  });
  it('error response', () => {
    return request(app)
      .get('/error')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual('not found');
      });
  });
});
