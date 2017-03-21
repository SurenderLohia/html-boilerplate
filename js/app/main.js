// Libs
var doT = require('dot/doT');
var prismjs = require('prismjs');

// App
var appData = require('./appData');
var _ = require('./helper');

// Templates
var optionSwitchListTmpl = require('html-loader!./templates/option-switch-list.html');
var selectBoxOptionsTmpl = require('html-loader!./templates/selectbox-options.html');

var metaTmpl = require('html-loader!./templates/codes/meta.html');
var jqueryTmpl = require('html-loader!./templates/codes/jquery.html');
var metaInfoTmpl = require('html-loader!./templates/codes/meta-info.html');
var cssLibsTmpl = require('html-loader!./templates/codes/css-libs.html');

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
      optionSwitchList: doT.template(optionSwitchListTmpl),
      selectBoxOptions: doT.template(selectBoxOptionsTmpl),
      cssLibs: doT.template(cssLibsTmpl)
    };
    
    // Sidebar
    _.renderTemplate('js-option-switch-meta-list', templates.optionSwitchList, {switchItems: appData.switchItems.metas});
    _.renderTemplate('js-option-switch-css-libraries-list', templates.optionSwitchList, {switchItems: appData.switchItems.cssLibraries});
    _.renderTemplate('js-option-switch-javascript-libraries-list', templates.optionSwitchList, {switchItems: appData.switchItems.jsLibraries});
    _.renderTemplate('js-ui-framework-options', templates.selectBoxOptions, {selectBoxOptions: appData.switchItems.uiFrameworks});
    _.renderTemplate('js-javascript-framework-options', templates.selectBoxOptions, {selectBoxOptions: appData.switchItems.jsFrameworks});
    

    // Main Code sections
    _.renderTemplate('jquery-template', templates.js, {path: appData.libraries.js.jquery.cdnPath});
    _.renderTemplate('responsive-meta-template', templates.meta, appData.meta.viewport);
    _.renderTemplate('meta-info-template', templates.metaInfo);
    _.renderTemplate('js-css-libs-template', templates.cssLibs, {cssLibs: appData.libraries.css});
  }

  // Code init
  init();
}(window));

