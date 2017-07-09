/* html-boilerplate MIT Licence */

// Libs
var doT = require('dot/doT');
var prismjs = require('prismjs');
var prismJsx = require('prismjs/components/prism-jsx');
var prismToolbar =  require('prismjs/plugins/toolbar/prism-toolbar');
var clipboard = require('clipboard');
var prismNormalizeWhitespace =  require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

// App
var appData = require('./appData');
var _ = require('./helper');
var prismCopy = require('./prism-copy');

// Templates
var optionSwitchListTmpl = require('html-loader!./templates/option-switch-list.html');
var selectBoxOptionsTmpl = require('html-loader!./templates/selectbox-options.html');

var metaTmpl = require('html-loader!./templates/codes/meta.html');
var helloWorld = require('html-loader!./templates/codes/hello-world.html');
var scriptTmpl = require('html-loader!./templates/codes/script.html');
var metaInfoTmpl = require('html-loader!./templates/codes/meta-info.html');
var cssLibsTmpl = require('html-loader!./templates/codes/css-libs.html');
var cssTmpl = require('html-loader!./templates/codes/css.html');

var vueJsHtml = require('html-loader!./templates/codes/vue-js-html.html');
var vueJsInit = require('html-loader!./templates/codes/vue-js-init.html');

var reactHtml = require('html-loader!./templates/codes/react-html.html');
var reactInit = require('html-loader!./templates/codes/react-init.html');

(function (w) {
  function init() {
    dotInit();
    bindEvents();
    prismCopy.init();
    setTimeout(function() {
      setFooterPos();
    }, 0);
  }

  function onOptionSwitchChange(e) {
    var curOption = (e.target);
    var curCodeId = curOption.getAttribute('data-template-code');
    var curCode = document.getElementById(curCodeId);
    var isChecked = curOption.checked;
    var curTemplteStyle;

    if (isChecked) {
      curTemplteStyle = 'block';
    } else {
      curTemplteStyle = 'none';
    }

    curCode.style.display = curTemplteStyle;
  }

  function onSidebarSelectBoxChange(e) {
    var curOption = (e.target);
    var curValue = curOption.value;

    var curCategoryClass = curOption.getAttribute('data-selectbox-category');
    var curTemplateCategoryItems = document.getElementsByClassName(curCategoryClass);

    var curTemplateClass = 'js-' + curValue + '-template';
    var curTemplateItems = document.getElementsByClassName(curTemplateClass);

    _.forEach(curTemplateCategoryItems, function (item) {
      item.style.display='none';
    });

    _.forEach(curTemplateItems, function (item) {
      item.style.display='block';
    });
  }

  function bindEvents() {
    var optionSwitches = document.querySelectorAll('.option-switch');
    var sidebarSelectBoxes = document.querySelectorAll('.js-sidebar-selectbox');

    _.forEach(optionSwitches, function (element) {
      _.attachEvent(element, 'change', onOptionSwitchChange);
    });

    _.forEach(sidebarSelectBoxes, function (element) {
      _.attachEvent(element, 'change', onSidebarSelectBoxChange);
    });
  }

  function setFooterPos() {
    var $body = _.getElById('js-body');
    var hasScrollbar = window.innerWidth > $body.clientWidth;
    var $footer = _.getElById('js-footer');
    if(hasScrollbar) {
      _.removeClass($footer, 'is-fixed');
    } else {
      _.addClass($footer, 'is-fixed');
    }
  }

  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  _.attachEvent(window, 'resize', throttle(setFooterPos, 1000));

  function dotInit() {
    var templates = {
      script: doT.template(scriptTmpl),
      meta: doT.template(metaTmpl),
      metaInfo: doT.template(metaInfoTmpl),
      optionSwitchList: doT.template(optionSwitchListTmpl),
      selectBoxOptions: doT.template(selectBoxOptionsTmpl),
      cssLibs: doT.template(cssLibsTmpl),
      css: doT.template(cssTmpl),
      helloWorld: doT.template(helloWorld),
      vueJsHtml: doT.template(vueJsHtml),
      vueJsInit: doT.template(vueJsInit),
      reactHtml: doT.template(reactHtml),
      reactInit: doT.template(reactInit),
    };

    var data = {
      uiFrameWorks: {
        label: 'UI Frameworks',
        list: appData.switchItems.uiFrameworks
      }
    }

    // Sidebar
    _.renderTemplate('js-option-switch-meta-list', templates.optionSwitchList, {
      switchItems: appData.switchItems.metas
    });
    _.renderTemplate('js-option-switch-css-libraries-list', templates.optionSwitchList, {
      switchItems: appData.switchItems.cssLibraries
    });
    _.renderTemplate('js-option-switch-javascript-libraries-list', templates.optionSwitchList, {
      switchItems: appData.switchItems.jsLibraries
    });
    _.renderTemplate('js-ui-framework-options', templates.selectBoxOptions, {
      selectBoxOptions: appData.switchItems.uiFrameworks,
      label: 'Select UI Framework',
      category: 'ui-framework'
    });
    _.renderTemplate('js-javascript-framework-options', templates.selectBoxOptions, {
      selectBoxOptions: appData.switchItems.jsFrameworks,
      label: 'Select JS Framework',
      category: 'js-framework'
    });

    // Main Code sections
    _.renderTemplate('js-jquery-template', templates.script, {
      path: appData.libraries.js.jquery.cdnPath
    });
    _.renderTemplate('js-responsive-meta-template', templates.meta, appData.meta.viewport);
    _.renderTemplate('js-meta-info-template', templates.metaInfo);
    _.renderTemplate('js-css-libs-template', templates.cssLibs, {
      cssLibs: appData.libraries.css
    });

    _.renderTemplate('js-hello-world-template', templates.helloWorld);

    // bootstrap
    _.renderTemplate('js-bootstrap-css-template', templates.css, {
      path: appData.uiFrameworks.bootstrap.css
    });
    _.renderTemplate('js-bootstrap-jquery-template', templates.script, {
      path: appData.uiFrameworks.bootstrap.jquery
    });
    _.renderTemplate('js-bootstrap-js-template', templates.script, {
      path: appData.uiFrameworks.bootstrap.js
    });

    // semantic-ui
    _.renderTemplate('js-semantic-ui-css-template', templates.css, {
      path: appData.uiFrameworks.semanticUi.css
    });
    _.renderTemplate('js-semantic-ui-jquery-template', templates.script, {
      path: appData.uiFrameworks.semanticUi.jquery
    });
    _.renderTemplate('js-semantic-ui-js-template', templates.script, {
      path: appData.uiFrameworks.semanticUi.js
    });

    // Vue.js
    _.renderTemplate('js-vue-js-template', templates.script, {
      path: appData.jsFrameworks.vueJs.core
    });
    _.renderTemplate('js-vue-js-html-template', templates.vueJsHtml);
    _.renderTemplate('js-vue-js-init-template', templates.vueJsInit);

    // React
    _.renderTemplate('js-babel-template', templates.script, {
      path: appData.jsFrameworks.react.babel
    });
    _.renderTemplate('js-react-template', templates.script, {
      path: appData.jsFrameworks.react.core
    });
    _.renderTemplate('js-react-dom-template', templates.script, {
      path: appData.jsFrameworks.react.dom
    });

    _.renderTemplate('js-react-html-template', templates.reactHtml);
    _.renderTemplate('js-react-init-template', templates.reactInit);
  }

  // Code init
  init();
}(window));