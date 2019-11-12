import assert from 'assert';

import parseDomain from './parse-domain';

describe('parseDomain(url)', () => {
  it('hostname returns domain', () => {
    const domain = parseDomain('http://example.com');
    assert.equal(domain, 'http://example.com');
  });

  it('url with path returns domain', () => {
    const domain = parseDomain('http://example.com/01/02/03/index.html');
    assert.equal(domain, 'http://example.com');
  });

  it('url with query parameters returns domain', () => {
    const domain = parseDomain('http://example.com?q=123');
    assert.equal(domain, 'http://example.com');
  });

  it('url with query parameters and path returns domain', () => {
    const domain = parseDomain('http://example.com/01/02?q=123');
    assert.equal(domain, 'http://example.com');
  });
});
