import assert from 'assert';
import cheerio from 'cheerio';

import HTML from './fixtures/html';
import GenericFaviconExtractor from './extractor';

describe('GenericFaviconExtractor', () => {
  describe('extract($, cachedMeta)', () => {
    it('extracts favicon rel shortcut', () => {
      const $ = cheerio.load(HTML.faviconShortcut.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconShortcut.result);
    });

    it('extracts favicon rel icon', () => {
      const $ = cheerio.load(HTML.faviconIcon.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconIcon.result);
    });

    it('extracts favicon rel shortcut icon', () => {
      const $ = cheerio.load(HTML.faviconShortcutIcon.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconShortcutIcon.result);
    });

    it('extracts favicon rel apple touch icon', () => {
      const $ = cheerio.load(HTML.faviconAppleTouchIconImageSrc.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconAppleTouchIconImageSrc.result);
    });

    it('extracts favicon rel image_src', () => {
      const $ = cheerio.load(HTML.faviconAppleTouchIcon.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconAppleTouchIcon.result);
    });

    it('extracts favicon rel multiple', () => {
      const $ = cheerio.load(HTML.faviconMultiple.test);
      const result = GenericFaviconExtractor.extract({
        $,
        url: 'https://example.com/path',
      });

      assert.equal(result, HTML.faviconMultiple.result);
    });
  });
});
