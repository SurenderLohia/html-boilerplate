// Libs
var doT = require('dot/doT');
var prismjs = require('prismjs');

// App
var appData = require('./appData');
var _ = require('./helper');

// Templates
var metaTmpl = require('html-loader!./templates/meta.html');
var jqueryTmpl = require('html-loader!./templates/jquery.html');
var metaInfoTmpl = require('html-loader!./templates/meta-info.html');

var optionSwitchListTmpl = require('html-loader!./templates/option-switch-list.html');

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
      js: doT.template(jqueryTmpl),
      meta: doT.template(metaTmpl),
      metaInfo: doT.template(metaInfoTmpl),
      optionSwitchList: doT.template(optionSwitchListTmpl)
    };
    
    _.renderTemplate('js-option-switch-list', templates.optionSwitchList, {switchItems: appData.switchItems});

    _.renderTemplate('jquery-template', templates.js, {path: appData.libraries.js.jquery.cdnPath});
    _.renderTemplate('responsive-meta-template', templates.meta, appData.meta.viewport);
    _.renderTemplate('meta-info-template', templates.metaInfo);
  }

  // Code init
  init();
}(window));

