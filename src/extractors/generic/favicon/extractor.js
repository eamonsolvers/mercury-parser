import { parseDomain } from 'utils';

import { FAVICON_URL_SELECTORS } from './constants';

const GenericFaviconExtractor = {
  extract({ $, url }) {
    let cleanUrl = null;

    FAVICON_URL_SELECTORS.forEach(function(selector) {
      const $node = $(selector).first();
      const src = $node.attr('src');

      if (src) {
        cleanUrl = src;

        if (src.startsWith('/')) cleanUrl = parseDomain(url) + src;
      }

      const href = $node.attr('href');
      if (href) {
        cleanUrl = href;

        if (href.startsWith('/')) cleanUrl = parseDomain(url) + href;
      }
    });

    return cleanUrl;
  },
};

export default GenericFaviconExtractor;
