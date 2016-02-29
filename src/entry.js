(function() {
  'use strict';

  require('node_modules/reveal.js/css/reveal.css');
  require('node_modules/reveal.js/css/theme/blood.css');
  require('node_modules/font-awesome/css/font-awesome.css');
  require('node_modules/highlight.js/styles/monokai-sublime.css');

  window.hljs = require('highlight.js');
  window.Reveal = require('reveal.js');
  require('./tagcloud');
  require('reveal-code-focus');

  setTimeout(function() {
    window.Reveal.initialize({
      transition: 'convex',
      history: true,
    });
    hljs.initHighlighting();
    RevealCodeFocus();
  }, 1000);

})();
