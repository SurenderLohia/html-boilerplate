// Libs
var doT = require('dot/doT');
var prismjs = require('prismjs');

// App
var appData = require('./appData');
var _ = require('./helper');

(function(w) {
  function init() {
    dotInit();
    updateTemplateSetup();
  }

  function updateTemplate(e) {
    var curOption = (e.target);
    var curCodeId = curOption.getAttribute('data-template-code');
    var curCode = document.getElementById(curCodeId); 
    var isChecked = curOption.checked;
    var curTemplteStyle;

    if(isChecked) {
      curTemplteStyle = 'block';
    } else {
      curTemplteStyle = 'none';
    }

    curCode.style.display=curTemplteStyle;
  }


  function updateTemplateSetup() {
    var optionSwitches = document.querySelectorAll('.option-switch');
    
    _.forEach(optionSwitches, function(optionSwitche) {
      optionSwitche.addEventListener('change', updateTemplate);
    });
  }
  
  

  function dotInit() {
    var templates = {
      js: doT.template(document.getElementById('js-tmpl').text),
      meta: doT.template(document.getElementById('meta-tmpl').text),
    };

    _.renderTemplate('jquery', templates.js, {path: 'path/to/jquery'});
    _.renderTemplate('responsive-meta', templates.meta, appData.meta.viewport);
  }

  console.log('webpack watching');

  // Code init
  init();
}(window));

