const HTML = {
  faviconShortcut: {
    test: `
      <html>
        <head>
          <link rel="shortcut" href="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
        </head>
      </html>
    `,
    result:
      'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
  },
  faviconIcon: {
    test: `
      <html>
        <head>
          <link rel="icon" href="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
        </head>
      </html>
    `,
    result:
      'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
  },
  faviconShortcutIcon: {
    test: `
      <html>
        <head>
          <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d">
        </head>
      </html>
    `,
    result:
      'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
  },
  faviconAppleTouchIcon: {
    test: `
    <html>
      <head>
        <link rel="apple-touch-icon image_src" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">
      </head>
    </html>
`,
    result:
      'https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a',
  },
  faviconAppleTouchIconImageSrc: {
    test: `
    <html>
      <head>
        <link rel="apple-touch-icon image_src" href="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a">
      </head>
    </html>
`,
    result:
      'https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a',
  },
  faviconMultiple: {
    test: `
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      </head>
    </html>
`,
    result: 'https://example.com/apple-touch-icon.png',
  },
};

export default HTML;
