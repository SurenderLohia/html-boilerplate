var prismCopy = {};

function init() {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

    return;
  }

  var Clipboard = window.Clipboard || undefined;

  if (!Clipboard && typeof require === 'function') {
    Clipboard = require('clipboard');
  }

  var callbacks = [];

  if (!Clipboard) {
    var script = document.createElement('script');
    var head = document.querySelector('head');

    script.onload = function() {
      Clipboard = window.Clipboard;

      if (Clipboard) {
        while (callbacks.length) {
          callbacks.pop()();
        }
      }
    };

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.8/clipboard.min.js';
    head.appendChild(script);
  }

  Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    var pat = /\sCopy|Copied!$/;

    var linkCopy = document.createElement('a');
    linkCopy.textContent = 'Copy';

    if (!Clipboard) {
      callbacks.push(registerClipboard);
    } else {
      registerClipboard();
    }

    return linkCopy;

    function registerClipboard() {
      var clip = new Clipboard(linkCopy, {
        'text': function () {
          return document.getElementById('js-boilerplate-code').innerText.replace(pat, '').trim();
        }
      });

      clip.on('success', function() {
        linkCopy.textContent = 'Copied!';

        resetText();
      });
      clip.on('error', function () {
        linkCopy.textContent = 'Press Ctrl+C to copy';

        resetText();
      });
    }

    function resetText() {
      setTimeout(function () {
        linkCopy.textContent = 'Copy';
      }, 5000);
    }
  });
}

prismCopy = {
  init: init
}

module.exports = prismCopy;



