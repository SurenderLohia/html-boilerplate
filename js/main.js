(function(w) {
  function init() {
    dotInit();
    updateTemplateSetup();
  }

  w.appData = {
    meta: {
      viewport: {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    },

    libaries: {
      js: {
        jquery: {
          name: "jquery",
          cdnPath: "cdn path"
        }
      },

      css: {
        normalizer: {
          name: "normalizer",
          cdnPath: "cdn path"
        }
      }
    }
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
    
    forEach(optionSwitches, function(optionSwitche) {
      optionSwitche.addEventListener('change', updateTemplate);
    });
  }
  
  // Helper function
  function forEach(arr, action) {
    var arrLen = arr.length;
    var item;
    for(var i = 0; i < arrLen; i += 1) {
      action(arr[i]);
    }
  }

  function dotInit() {
    var templates = {
      js: doT.template(document.getElementById('js-tmpl').text),
      meta: doT.template(document.getElementById('meta-tmpl').text),
    };

    renderTemplate('jquery', templates.js, {path: 'path/to/jquery'});
    renderTemplate('responsive-meta', templates.meta, w.appData.meta.viewport);
  }

  // dotT.js render Helper
  function renderTemplate(templatePlaceholderId, templateFn, data) {
    var templatePlaceHolder = document.getElementById(templatePlaceholderId);
    templatePlaceHolder.innerHTML=templateFn(data);
  }

  // Code init
  init();
}(window));

